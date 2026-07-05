type AwardDetails = {
  name: string;
  date: Date;
};
type Awards = {
  [key: string]: AwardDetails;
};
type Author = {
  name: string;
  age: number;
  email: string;
  readonly type: 'human' | 'ai';
};
type Post = {
  title: string;
  content: string;
  date: Date;
  category: string;
  author: Author;
  awards: Awards;
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
    type: 'human',
  },
  awards: {
    web: {
      name: 'Best Web Developer',
      date: new Date('2022-01-01'),
    },
    web3: {
      name: 'Best Web3 Developer',
      date: new Date('2023-01-01'),
    },
  },
};

let post2: Post = {
  title: 'Advanced TypeScript',
  content: 'Learn advanced TypeScript concepts and best practices.',
  date: new Date(),
  category: 'programming',
  author: {
    name: 'Jane Smith',
    age: 25,
    email: 'jane.smith@example.com',
    type: 'human',
  },
  awards: {
    ts: {
      name: 'Best TypeScript Developer',
      date: new Date('2023-06-01'),
    },
  },
};

// post.author.type = 'ai'
