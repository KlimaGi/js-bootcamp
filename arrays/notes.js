const notes = [
  {
    title: "trip",
    body: "Spain",
  },
  {
    title: "learning plan",
    body: "full stack",
  },
  {
    title: "work plans",
    body: "make a project",
  },
];

const findNote = (notes, noteTitle) => {
  return notes.find((note) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = (notes, query) => {
  return notes.filter((note, index) => {
    const isTitleMatch = note.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
    const isBodyMatch = note.body
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(notes, "full"));

// const findNote = (notes, noteTitle) => {
//   const index = notes.findIndex((note) => {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

const note = findNote(notes, "Learning plan");
console.log(note);
