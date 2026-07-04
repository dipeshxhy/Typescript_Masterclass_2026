let id = Symbol(123);
console.log(id);

let slphabeticId = Symbol('abc');
console.log(slphabeticId);

let user = {
  [id]: 'Mark',
  name: 'John',
  getId() {
    return this[id];
  },
};

console.log(user.name);
console.log(user[id]);
console.log(user.getId());
