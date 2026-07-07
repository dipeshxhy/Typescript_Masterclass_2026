/**
 * ! You are developing a simple employee management system for a company. Implement the following requirements using TypeScript:
 *
 * TODO: 1. Class Definition: Create a class Employee with the following properties:
 ** -  name (string, public)
 ** -  age (number, public)
 ** -  salary (number, private)
 ** -  id (number, protected)
 *
 * TODO: 2. Use shorthand syntax in the constructor to initialize the properties name and age.
 *
 * TODO: 3. Implement getter and setter methods for the salary property. The setter should ensure the salary is a positive number.
 *
 * TODO: 4. Add a static property companyName (string, public) and a static method getCompanyName that returns the company name.
 *
 * TODO: 5. Create a subclass Manager that extends the Employee class. Add an additional property department (string, public).
 *
 * TODO: 6. Override a method getDetails in the Manager class to include the department information along with the employee details.
 */

class Employee {
  static companyName: string = 'Tech Solutions Inc.';
  protected id: number;

  constructor(
    public name: string,
    public age: number,
    id: number,
    private _salary: number,
  ) {
    this.id = id;
    this.salary = _salary;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error('Salary must be a positive number.');
    }
    this._salary = value;
  }

  static getCompanyName(): string {
    return Employee.companyName;
  }

  getDetails(): string {
    return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Salary: ${this._salary} and Company Name: ${Employee.getCompanyName()}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    id: number,
    salary: number,
    public department: string,
  ) {
    super(name, age, id, salary);
  }

  getDetails(): string {
    return `${super.getDetails()}, Department: ${this.department}`;
  }
}

// Example usage:
const emp1 = new Employee('Alice', 30, 1, 50000);
console.log(emp1.getDetails());
emp1.salary = 55000; // Update salary
console.log(emp1.getDetails());

const mgr1 = new Manager('Bob', 40, 2, 80000, 'IT');
console.log(mgr1.getDetails());
