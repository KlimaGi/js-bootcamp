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
    completed: true,
  },
  {
    text: "clean home",
    completed: false,
  },
];

const sortTodos = (todos) => {
  todos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

const deleteTodo = (todos, todoText) => {
  const index = todos.findIndex((todo) => {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

const getThingsToDo = (todos) => {
  return todos.filter((todo) => {
    return !todo.completed;
  });
};

sortTodos(todos);
console.log(todos);
console.log(true > false);
//console.log(getThingsToDo(todos));

// deleteTodo(todos, "clean home");
// console.log(todos);
