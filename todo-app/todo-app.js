let todos = [
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

const filters = {
  searchText: "",
};

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h4");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach((todo) => {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("#todos").appendChild(p);
  });
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push({
    text: e.target.elements.todoText.value,
    completed: false,
  });
  renderTodos(todos, filters);
  e.target.elements.todoText.value = "";
});