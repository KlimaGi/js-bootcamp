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

document.querySelector("#create-note").addEventListener("click", (e) => {
  e.target.textContent = "The button was clicked";
});

document.querySelector("#remove-all").addEventListener("click", () => {
  document.querySelectorAll(".note").forEach((note) => {
    note.remove();
  });
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  console.log(e.target.value);
});
