enum AgeUnit {
  Years = 'years',
  Months = 'months',
  Days = 'days',
}
type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  greet: (greeting: string) => string;
};

const person: Person = {
  name: 'Alice',
  age: 30,
  ageUnit: AgeUnit.Years,
  greet: (greeting) => `S{greeting} ${person.name}`,
};

function convertAgeToMonths(person: Person): Person {
  if (person.ageUnit === AgeUnit.Years) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.Months;
  }
  return person;
}

console.log(convertAgeToMonths(person));
