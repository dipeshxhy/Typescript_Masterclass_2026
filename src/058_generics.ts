function returnParams<T>(params: T): T {
  return params;
}
const result1 = returnParams<number>(42);
const result2 = returnParams<string>('Hello, TypeScript!');
const result3 = returnParams<boolean>(true);

const myParam: <T>(params: T) => T = (param) => param;

type ObjectType<T> = {
  myParam: (params: T) => T;
};
