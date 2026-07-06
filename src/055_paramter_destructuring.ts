type Numbers = {
  a: number;
  b: number;
  c: number;
};
let numbers: Numbers = {
  a: 1,
  b: 2,
  c: 3,
};

function sum({ a, b, c }: Numbers): number {
  return a + b + c;
}

console.log(sum(numbers));
