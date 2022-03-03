import { Router } from 'express';
import ConstructorsController from '@/controllers/constructor.controller';
import { Routes } from '@interfaces/routes.interface';

class ConstructorsRoute implements Routes {
  public path = '/constructors';
  public router = Router();
  public constructorsController = new ConstructorsController();

  constructor() {
    this.initializeRoutes();
  }

  // initalize all Constructor routers
  private initializeRoutes() {
    /**
     * @swagger
     *
     * /constructors:
     *   get:
     *     produces:
     *       - application/json
     *     tags:
     *       - constructors
     *     summary: Find All Constructors.
     *     responses:
     *       200:
     *         description: 'OK'
     *       500:
     *         description: 'Server Error'
     */
    this.router.get(`${this.path}`, this.constructorsController.getConstructors);

    // .. others constructor routes like: POST, PUT, DELETE....
  }
}

export default ConstructorsRoute;
