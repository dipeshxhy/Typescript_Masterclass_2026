let firstName = <any>'Mark';

let user = {
  name: 'Mark',
  email: 'mark@example.com',
};
type User = {
  name: string;
  email: string;
};
function fetchUser() {
  return user as User;
}

const fetchedUser = fetchUser();
