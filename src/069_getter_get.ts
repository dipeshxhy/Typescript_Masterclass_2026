class Person {
  private _age?: number;
  constructor(
    public firstName: string,
    public lastName: string,
  ) {
    this._age = 0;
  }

  public set age(age: number) {
    if (age < 0 || age > 120) {
      throw new Error('Age must be a value between 0 and 120');
    }
    this._age = age;
  }
  // getter
  public get age(): number {
    if (this._age === undefined) {
      throw new Error('Age is not set');
    }
    return this._age;
  }
  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const john: Person = new Person('John', 'Doe');
const jane: Person = new Person('Jane', 'Smith');
john.age = 30;
// jane.age = 225;
console.log(john.age);
console.log(john.fullName);
console.log(jane.fullName);
console.log(john);
console.log(jane);
