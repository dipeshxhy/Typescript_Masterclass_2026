// Practice Questions
//* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ['one', 'two', 'three', 'four', 'five'];

//* 2. Create a tuple person that holds a string (name) and a number (age).
let person: [string, number] = ['John Doe', 30];

//* 3. Create a readonly array colors that holds strings and a readonly tuple point that holds two numbers (x, y). Attempt to modify their elements and observe the TypeScript error.
let colors: readonly string[] = ['red', 'green', 'blue'];
let point: readonly [number, number] = [10, 20];
// colors[0] = 'yellow'

//* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending
enum StatusEnum {
  Active,
  Inactive,
  Pending,
}
//* 5. Create an object as const called Status with the same structure as an StatusEnum
const Status = {
  Active: 0,
  Inactive: 1,
  Pending: 2,
} as const;
