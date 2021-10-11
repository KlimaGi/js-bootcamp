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

// Listen for new todo creation
document.querySelector("#add-todo").addEventListener("click", () => {
  console.log("Add new todo...");
});

// Listen for todo text change
document.querySelector("#input-todo").addEventListener("input", (e) => {
  console.log(e.target.value);
});
