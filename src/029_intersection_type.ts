type Cat = {
  name: string;
  purrs: true;
  color: string;
};
type Dog = {
  name: string;
  barks: true;
  wagsTail: true;
  color: string;
};

type DogAndCatIntersection = Dog & Cat;

let hybridAnimal: DogAndCatIntersection = {
  name: 'Fido',
  barks: true,
  wagsTail: true,
  purrs: true,
  color: 'Brown',
};
