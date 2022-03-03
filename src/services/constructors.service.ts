import { HttpException } from '@exceptions/HttpException';
import { Constructor } from '@/interfaces/constructors.interface';
import constructorData from '@/data/constructors.data';

class ConstructorService {
  // loading the fake data
  public constructors = constructorData;

  // this method returs all constructors
  public async findAllConstructors(): Promise<Constructor[]> {
    const constructors: Constructor[] = this.constructors;
    return constructors;
  }
}

export default ConstructorService;
