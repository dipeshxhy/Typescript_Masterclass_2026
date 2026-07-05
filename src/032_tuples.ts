// tuples has fixed length array
let person: readonly [string, string, number] = ['John', 'Doe', 18];
type User = [string, string, number, string?];
let user1: User = ['John', 'Doe', 18];
let user2: User = ['John', 'Doe', 18, 'New York'];

type ListOfStudents = [number, boolean, ...string[]];
const passingStudents: ListOfStudents = [85, true, 'Alice', 'Bob', 'Charlie'];

type StringBooleanNumberTuple = [string, ...boolean[], number];
type BooleanStringNumberTuple = [...boolean[], string, number];

let booleanStringNumberTuple: BooleanStringNumberTuple = [true, false, 'Hello', 42];
