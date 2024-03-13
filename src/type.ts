type Pet = {
  id: number;
  name: string;
  breed: string;
  isAdopted: boolean;
  owner?: string;
};
export const listPets: Pet[] = [
  {
    id: 245689,
    name: 'Acaymo',
    breed: 'husky',
    isAdopted: true,
  },
  {
    id: 245690,
    name: 'Armiche',
    breed: 'Chow-chow',
    isAdopted: true,
  },
  {
    id: 245691,
    name: 'Benaguare',
    breed: 'Bulldog',
    isAdopted: true,
  },
  {
    id: 245692,
    name: 'Bentejui',
    breed: 'Pomeranian',
    isAdopted: true,
  },
];
