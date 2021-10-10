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

const sortNotes = (notes) => {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

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

// console.log(findNotes(notes, "full"));

// const note = findNote(notes, "Learning plan");
// console.log(note);

sortNotes(notes);
console.log(notes);
