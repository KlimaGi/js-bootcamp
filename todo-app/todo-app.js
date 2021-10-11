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

// You have 2 todos left
// p tag for every todo
const incompleteTodos = todos.filter((todo) => !todo.completed);
const summary = document.createElement("h4");
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector("body").appendChild(summary);

todos.forEach((todo) => {
  const p = document.createElement("p");
  p.textContent = todo.text;
  document.querySelector("body").appendChild(p);
});
