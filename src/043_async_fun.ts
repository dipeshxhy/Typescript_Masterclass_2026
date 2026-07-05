async function fetchFromDatabase(id: number) {}

type User = {
  name: string;
  age: number;
};

async function getUser(id: number): Promise<User> {
  // Simulate fetching user data from a database
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Alice', age: 30 });
    }, 1000);
  });
}
