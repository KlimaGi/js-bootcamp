const todo = {
  id: "redfss35452",
  text: "pay the bills",
  completed: false,
};

const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`);
};
printTodo(todo);

const {
  text: todoText,
  completed,
  details = "No details provided",
  ...others
} = todo;

console.log(todoText);
console.log(completed);
console.log(details);
console.log(others); // Object {id: 'redfss35452'}

const age = [64, 0, 13];
const [firstAge, ...otherAges] = age;
console.log(firstAge);
console.log(otherAges);
