type Dog = {
  name: string;
  barks: boolean;
  wagsTail: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: 'Buddy',
  barks: true,
  wagsTail: true,
};

let cat: DogAndCatUnion = {
  name: 'Whiskers',
  purrs: true,
};

let hybridAnimal: DogAndCatUnion = {
  name: 'Fido',
  barks: true,
  wagsTail: true,
  purrs: true, // This property is not valid for Dog type
};

// let partialDog: DogAndCatUnion = {
//   name: 'Max',
//   barks: true,
//   // wagsTail is missing, but it's optional in the union type
// };
