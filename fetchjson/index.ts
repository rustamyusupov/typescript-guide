import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: Number;
  title: String;
  completed: Boolean;
}

const logTodo = (id: Number, title: String, completed: Boolean) => {
  console.log(`
    The todo with id: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
  `);
}

axios(url).then(response => {
  const { id, title, completed } = response.data as Todo;

  logTodo(id, title, completed);
});
