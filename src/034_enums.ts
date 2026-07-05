const STATUS_LOADING = 'loading';
const STATUS_SUCCESS = 'success';
const STATUS_ERROR = 'error';

enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Up);

enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction2.Up);

enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const person: Person = {
  name: 'John Doe',
  email: 'john@mail.com',
  password: '123456',
  role: Roles.ADMIN,
};

console.log(person);

enum Direction3 {
  Up = 1,
  Down = 'down',
  left = 3,
}
