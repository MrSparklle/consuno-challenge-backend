import { Constructor } from '@/interfaces/constructors.interface';

// provide mocked data to app
const constructorData: Constructor[] = [
  {
    id: 1,
    name: 'Alpha Constructor Co',
    logoUrl: 'https://placekitten.com/200/200',
    specialties: [
      { id: 10, specialtie: 'painting' },
      { id: 20, specialtie: 'eletric' },
    ],
    city: 'Berlin',
  },
  {
    id: 2,
    name: 'Gamma Corportate ',
    logoUrl: 'https://placekitten.com/200/200',
    specialties: [
      { id: 10, specialtie: 'painting' },
      { id: 60, specialtie: 'excavation' },
    ],
    city: 'Hamburg',
  },
  {
    id: 3,
    name: 'Beta Buildings and Constructors Inc',
    logoUrl: 'https://placekitten.com/200/200',
    specialties: [
      { id: 40, specialtie: 'infrastructure' },
      { id: 30, specialtie: 'roofs' },
      { id: 20, specialtie: 'eletric' },
      { id: 60, specialtie: 'excavation' },
    ],
    city: 'Munich',
  },
  {
    id: 4,
    name: 'Delta Constructor Services',
    logoUrl: 'https://placekitten.com/200/200',
    specialties: [{ id: 50, specialtie: 'home renovation' }],
    city: 'Berlin',
  },
  {
    id: 5,
    name: 'No Specialties Constructor',
    logoUrl: 'https://placekitten.com/200/200',
    specialties: [{ id: 40, specialtie: 'infrastructure' }],
    city: 'Berlin',
  },
];

export default constructorData;
