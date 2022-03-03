import { Specialties } from '@interfaces/specialities.interface';

export interface Constructor {
  id: number;
  name: string;
  logoUrl: string;
  specialties: Specialties[];
  city: string;
}
