let myBook = {
  title: "1984",
  author: "George Orwell",
  pages: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";
console.log(`${myBook.title} by ${myBook.author}`);

let person = {
  name: "Gi",
  age: 31,
  location: "Vilnius",
};
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
person.age = person.age + 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
