import request from 'supertest';
import App from '@/app';
import { Constructor } from '@interfaces/constructors.interface';
import constructorData from '@data/constructors.data';
import ConstructorRoute from '@routes/constructors.route';

jest.mock('@utils/logger');

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Constructors', () => {
  describe('[GET] /constructors', () => {
    it('response statusCode 200 / findAll', () => {
      const allConstructors: Constructor[] = constructorData;
      const constructorRoute = new ConstructorRoute();
      const app = new App([constructorRoute]);

      return request(app.getServer()).get(`${constructorRoute.path}`).expect(200, allConstructors);
    });
  });
});
