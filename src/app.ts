import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { NODE_ENV, PORT, LOG_FORMAT, ORIGIN } from '@config';
import { Routes } from '@interfaces/routes.interface';
import errorMiddleware from '@middlewares/error.middleware';
import { logger, stream } from '@utils/logger';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
  }

  // prints to the user/logs usefull information about the running app
  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  // returns the server instance (usefull in tests)
  public getServer() {
    return this.app;
  }

  // initialize all app midlewares
  private initializeMiddlewares() {
    // HTTP request logger middleware
    this.app.use(morgan(LOG_FORMAT, { stream }));
    // enable cors to permit frontend and backend to comunicate in differente ip/ports
    this.app.use(cors({ origin: ORIGIN }));
    // helps to secure http requests
    this.app.use(helmet());
    // attempt to compress response bodies for all request
    this.app.use(compression());
    // all responses in json format
    this.app.use(express.json());
    // data will be parsed with the qs library and permit request data as nested json object
    this.app.use(express.urlencoded({ extended: true }));
  }

  // initialize all app routes based on array of routes passed during app initialization
  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  // initialize swagger service to provide documentation about avaliable APIs
  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        openapi: '3.0.0',
        info: {
          title: 'Constructors App REST API',
          version: '1.0.0',
          description: 'Constructors docs',
        },
      },
      apis: ['./src/routes/*.ts'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  // initialize the error handling middleware. All errors in app will be redirect to this handling
  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
