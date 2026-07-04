function multiplyBtTwo(number: unknown) {
  if (typeof number === 'number') {
    return number * 2;
  }
  throw new Error('Input must be a number');
}
console.log(multiplyBtTwo(3));
console.log(multiplyBtTwo('2'));
