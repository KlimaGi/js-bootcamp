let notes = getSavedNotes();

const filters = {
  searchText: "",
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", (e) => {
  const id = uuidv4();
  notes.push({
    id: id,
    title: "",
    body: "",
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

const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

const date1 = new Date();
const date2 = new Date("2021 09 01");
const timestamp1 = date1.getTime();
const timestamp2 = date2.getTime();
const first = timestamp1 < timestamp2 ? timestamp1 : timestamp2;
console.log(new Date(first).toString());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);
