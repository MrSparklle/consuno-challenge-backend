import errorMiddleware from '@middlewares/error.middleware';
import { Request, Response, NextFunction } from 'express';
import { HttpException } from '@/exceptions/HttpException';

jest.mock('@utils/logger');

describe('Teste middleware de handler de erros', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  const next: NextFunction = jest.fn();

  beforeEach(() => {
    req = {
      params: {},
      body: {},
    };

    res = {
      statusCode: 409,
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  it('should be haddling response errors', () => {
    errorMiddleware(new HttpException(409, "You're not user"), req as Request, res as Response, next as NextFunction);

    expect(res.statusCode).toBe(409);
    expect(next).not.toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();
  });

  it('should raise an error in the middleware', () => {
    res = null;

    errorMiddleware(new HttpException(null, null), req as Request, res as Response, next as NextFunction);

    expect(next).toHaveBeenCalled();
  });
});
