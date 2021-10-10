const notes = [
  {
    title: "trip",
    body: "Spain",
  },
  {
    title: "learning",
    body: "full stack",
  },
  {
    title: "work plans",
    body: "make a project",
  },
];
// end
// console.log(notes.pop());
// notes.push("new note");

// //start
// console.log(notes.shift());
// notes.unshift("first note");

//notes.splice(1, 1, "This is the new second item");

// notes[2] = "This is new note 3";

// notes.forEach((item, index) => {
//   console.log(index + 1, item);
// });

console.log(notes.length);
console.log(notes);

const index = notes.findIndex((note, index) => {
  console.log(note);
  return note.title === "learning";
});
console.log(index);
