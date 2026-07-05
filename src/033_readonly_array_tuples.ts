let number: readonly number[] = [1, 2, 3];
// number.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.

type ReadonlyTuple = readonly [string, number, boolean];

let person: ReadonlyTuple = ['John', 30, true];
// person[0] = 'Mark'
type a = Readonly<string[]>;

type b = ReadonlyArray<string | number | boolean>;

// tuples
type c = Readonly<[number, string, number]>;
