import { config } from 'dotenv';

// define server configuration base on .env file passed during the server start process in command line.
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

// export constants to be used around the app
export const { NODE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;
