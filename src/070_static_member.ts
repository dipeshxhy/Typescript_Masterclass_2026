function loadInitialCount(): number {
  return 10;
}
class Counter {
  static count: number = 0;

  static increment() {
    Counter.count++;
  }
  static {
    console.log('Static block executed');
    Counter.count = loadInitialCount();
  }
}
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
console.log(Counter.count);

const counter1 = new Counter();
// console.log(counter1.count)
