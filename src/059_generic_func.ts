// type GetFirstElement<T extends any[]> = T extends [infer First, ...any[]] ? First : never;

// type FirstElementOfNumbers = GetFirstElement<[1, 2, 3]>;
type GetfirstElement = <T>(arr: T[]) => T | undefined;

const getFirstElement: GetfirstElement = (arr) => {
  return arr[0];
};

const firstNumber = getFirstElement<number>([1, 2, 3]); // Type is number
const firstString = getFirstElement<string>(['a', 'b', 'c']); // Type is string
const firstUndefined = getFirstElement<undefined>([]); // Type is undefined
