type Identifiable = { id: number };
class Repository<T extends Identifiable> {
  private data: T[] = [];
  addItem(item: T): void {
    this.data.push(item);
  }
  getItemById(id: number): T | undefined {
    return this.data.find((item) => item.id === id);
  }
  getAllItems(): T[] {
    return this.data;
  }
  removeItemById(id: number): void {
    this.data = this.data.filter((item) => item.id !== id);
  }
}

type User = { id: number; name: string };
const userRepository = new Repository<User>();
userRepository.addItem({ id: 1, name: 'Alice' });
userRepository.addItem({ id: 2, name: 'Bob' });

console.log(userRepository.getAllItems());
console.log(userRepository.getItemById(1));
userRepository.removeItemById(1);
console.log(userRepository.getAllItems());
