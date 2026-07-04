type StringOrNumber = string | number;
type NumberOrUndefined = number | undefined;
type StringOrNumberOrUndefined = string | number | undefined;
type DateOrUndefined = Date | undefined;

let stringOrNumber: StringOrNumber = 'hello';
stringOrNumber = 32;
// stringOrNumber = true

function print(input?: string) {
  if (input) {
    console.log(input.toUpperCase());
  }
  console.log('Please input something to print');
}
print();
print('hello world');
