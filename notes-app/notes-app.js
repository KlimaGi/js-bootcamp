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

const filters = {
  searchText: "",
};

//create, update
//localStorage.setItem("location", "Vilnius");
//read
//console.log(localStorage.getItem("location"));
//delete
//localStorage.removeItem("location");
//localStorage.clear();

// const user = {
//   name: "Gi",
//   age: 31,
// };
// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem("user", userJSON);
const userJSON = localStorage.getItem("user");
const user = JSON.parse(userJSON);
console.log(`${user.name} is ${user.age}`);

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach((note) => {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", (e) => {
  e.target.textContent = "The button was clicked";
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  console.log(e.target.value);
});
