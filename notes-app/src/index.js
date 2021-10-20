import { getNotes, createNote, removeNote, updateNote } from "./notes";
import { getFilters, setFilters } from "./filters";

// console.log(getNotes());
// createNote();
//removeNote();
// updateNote("42ce5d25-bdb6-4218-a00d-54869d865172", {
//   title: "My note title",
//   body: "New note body.",
// });
// console.log(getNotes());

console.log(getFilters());
setFilters({
  searchText: "Office",
  sortBy: "byCreated",
});
console.log(getFilters());
