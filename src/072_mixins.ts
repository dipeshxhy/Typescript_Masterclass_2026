type Constructor<T = {}> = new (...args: any[]) => T;
function TimeStamp<T extends Constructor>(Base: T) {
  return class extends Base {
    protected timestamp: Date = new Date();
    getTimestamp(): Date {
      return this.timestamp;
    }
  };
}
class User {
  constructor(public name: string) {}
}

class UserWithTimestamp extends TimeStamp(User) {
  constructor(name: string) {
    super(name);
  }
  getUserInfo(): string {
    return `Name: ${this.name}, Timestamp: ${this.getTimestamp()}`;
  }
}

const userWithTimestamp = new UserWithTimestamp('Alice');
console.log(userWithTimestamp.getUserInfo());
// const UserWithTimestamp = TimeStamp(User);
