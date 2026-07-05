function intro(name: string, age: number):string  {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

// function expression
const intro2 = (name: string, age: number): string => {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

const intro3: (name: string, age: number) => string = (name, age) => {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}