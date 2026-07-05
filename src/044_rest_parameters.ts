function multiplyBy(by: number, ...numbers: number[]) {
  return numbers.map((n) => n * by);
}
console.log(multiplyBy(2, 3, 4, 5, 56));

const args = [8, 5] as const;
const amngle = Math.atan2(...args);
