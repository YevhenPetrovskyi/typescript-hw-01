import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

fetchData<Todo>('https://jsonplaceholder.typicode.com/todos/1')
  .then((todo) => console.log(todo))
  .catch((error) => console.error(error));
