type Post = {
  title: string;
  content: string;
  date: Date;
  category: string;
};
let post: Post = {
  title: 'TypeScript Basics',
  content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  date: new Date(),
  category: 'programming',
};
