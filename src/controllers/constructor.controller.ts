import { NextFunction, Request, Response } from 'express';
import { Constructor } from '@/interfaces/constructors.interface';
import constructorService from '@/services/constructors.service';

class ConstructorsController {
  public constructorService = new constructorService();

  public getConstructors = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // call service to get all constructors data
      const findAllConstructorsData: Constructor[] = await this.constructorService.findAllConstructors();

      res.status(200).json(findAllConstructorsData);
    } catch (error) {
      // in case of error, the error handling middlwares take care of it
      next(error);
    }
  };
}

export default ConstructorsController;
