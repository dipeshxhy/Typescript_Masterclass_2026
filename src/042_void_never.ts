function writeToDatabase(value: string) {
  console.log('Writing to database:', value);
}

// never
function throwError(message: string): never {
  throw new Error(message);
}

type check = never extends void ? true : false; // true
type check2 = void extends never ? true : false; // false
