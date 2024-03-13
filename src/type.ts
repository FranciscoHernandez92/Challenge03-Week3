type Pet = {
  id: number;
  name: string;
  breed: string;
  isAdopted: boolean;
  owner?: string;
};
export const listPets: Pet[] = [
  {
    img: './images/husky.jfif',
    id: 245689,
    name: 'Acaymo',
    breed: 'husky',
    isAdopted: true,
  },
  {
    img: './images/chow-chow.jfif',
    id: 245690,
    name: 'Armiche',
    breed: 'Chow-chow',
    isAdopted: true,
  },
  {
    img: './images/bulldog.jfif',
    id: 245691,
    name: 'Benaguare',
    breed: 'Bulldog',
    isAdopted: true,
  },
  {
    img: './images/pomeranian.jfif',
    id: 245692,
    name: 'Bentejui',
    breed: 'Pomeranian',
    isAdopted: true,
  },
];
