type HasLength = {
  length: number;
};

function logLength<T extends HasLength>(item: T): void {
  console.log(`Length: ${item.length}`);
}

logLength('Hello'); // Length: 5
logLength([1, 2, 3, 4]);
