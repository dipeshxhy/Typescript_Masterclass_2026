const throwError = (message: string): never => {
  throw new Error(message);
};

let strings = ['a', 'b', 'c'];

type check = null extends any ? true : false;
type check2 = Function extends object ? true : false;
