const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne, safeIntPlusTwo);

let bigInt1 = BigInt(safeIntPlusOne);
bigInt1 = bigInt1 + BigInt(1);
console.log(bigInt1);

let bigint2 = 1234773n;

let c = bigInt1 - bigint2;
console.log(c);

// let e = 12356.333n;

// let f = Math.log(bigInt1)
