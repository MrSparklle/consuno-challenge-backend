import constructorData from '@/data/constructors.data';
import ConstructorService from '@/services/constructors.service';
import ConstructorsController from './constructor.controller';
import httpMocks from 'node-mocks-http';

describe('AquisicaoRoute', () => {
  it('should instantiate constructorConstroller', () => {
    const constructorConstroller = new ConstructorsController();
    expect(constructorConstroller).toBeTruthy();
  });

  it('Should return 200 on request to router', async () => {
    jest.spyOn(ConstructorService.prototype, 'findAllConstructors').mockImplementation(() => {
      return Promise.resolve({ status: 200, headers: 'test', ...constructorData });
    });

    // used to mock the request and response express objects.
    // these are complex objects to mock manually
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const next = jest.fn();

    const constructorConstroller = new ConstructorsController();

    constructorConstroller.getConstructors(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(next).not.toHaveBeenCalled();
  });
});
