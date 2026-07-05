type Author = {
  name: string;
  age: number;
  email: string;
};
type Post = {
  title: string;
  content: string;
  date: Date;
  category: string;
  author: Author;
};
let post: Post = {
  title: 'TypeScript Basics',
  content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  date: new Date(),
  category: 'programming',
  author: {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  },
};
