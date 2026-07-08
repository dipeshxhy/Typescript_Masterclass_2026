interface Person {
  name: string;
  email: string;
  age: number;
  phone?: string; // Optional property
  greet?(message: string): void; // Optional method
}
const person: Person = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 30,
};
