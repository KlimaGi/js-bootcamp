const todos = [
  {
    text: "read book",
    completed: false,
  },
  {
    text: "do yoga",
    completed: true,
  },
  {
    text: "learn topic",
    completed: false,
  },
  {
    text: "clean home",
    completed: false,
  },
];

const deleteTodo = (todos, todoText) => {
  const index = todos.findIndex((todo) => {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

deleteTodo(todos, "clean home");
console.log(todos);