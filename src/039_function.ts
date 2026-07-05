function intro(name: string, age: number, country?: string): string {
  if (country) {
    return `Hello, my name is ${name} and I am ${age} years old. I am from ${country}.`;
  }
  return `Hello, my name is ${name} and I am ${age} years old.`;
}
intro('Alice', 30, 'USA');

// function expression
const intro2 = (name: string, age: number): string => {
  return `Hello, my name is ${name} and I am ${age} years old.`;
};

const intro3: (name: string, age: number) => string = (name, age) => {
  return `Hello, my name is ${name} and I am ${age} years old.`;
};
