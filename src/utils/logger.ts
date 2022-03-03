import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import winston from 'winston';
import { LOG_DIR } from '@config';

// logs dir
const logDir: string = join(__dirname, LOG_DIR);

// if logdir doesn't exists, create it
if (!existsSync(logDir)) {
  mkdirSync(logDir);
}

// Define log format
const logFormat = winston.format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`);

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat,
  ),
  transports: [
    // debug log setting
    new winston.transports.File({
      level: 'debug',
      dirname: logDir + '/debug', // log file /logs/error/*.log in save
      filename: 'debug.log',
      handleExceptions: true,
    }),
    // error log setting
    new winston.transports.File({
      level: 'error',
      dirname: logDir + '/error', // log file /logs/error/*.log in save
      filename: 'error.log',
      handleExceptions: true,
    }),
  ],
});

// winston transport configuration for console message errors
logger.add(
  new winston.transports.Console({
    format: winston.format.combine(winston.format.splat(), winston.format.colorize()),
  }),
);

// define parameters for morgan logs
const stream = {
  write: (message: string) => {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  },
};

export { logger, stream };
