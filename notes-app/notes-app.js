let notes = getSavedNotes();

const filters = {
  searchText: "",
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", (e) => {
  const id = uuidv4();
  const timestamp = moment().valueOf();
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  console.log(e.target.value);
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

//const now = moment();
// now.subtract(1, "week").subtract(20, "days");
// console.log(now.format("MMMM Do, YYYY"));
// console.log(now.fromNow());
// const nowTimestamp = moment().valueOf();
//console.log(nowTimestamp);
// console.log(moment(nowTimestamp).toString());

// const bday = moment();
// bday.year(1989).month(10).date(21);
// console.log(bday.format("MMM D, YYYY"));
