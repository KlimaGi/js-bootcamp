const todos = ["read book", "do yoga", "learn topic"];

todos.splice(1, 1);
todos.push("Finish spanish lesson challenge");
todos.shift();

console.log(`You have ${todos.length} todos!`);

todos.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});
