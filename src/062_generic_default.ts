async function fetchData<T = any>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: T = await response.json();
  return data;
}

async function fetchDefault() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const data = await fetchData(url);
  console.log(data);
}
fetchDefault();

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function fetchTodo() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const data = await fetchData<Todo>(url);
  console.log(data);
}
fetchTodo();
