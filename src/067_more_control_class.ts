class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
  ) {
    if (age < 0 || age > 120) {
      throw new Error('Age must be a value between 0 and 120');
    }
  }
  public fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const john: Person = new Person('John', 'Doe', 30);
const jane: Person = new Person('Jane', 'Smith', 25);
console.log(john.fullName());
console.log(jane.fullName());
console.log(john);
console.log(jane);
