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

// Query and remove
// const p = document.querySelector("p");
// p.remove();

// Query all and remove
const ps = document.querySelectorAll("p");

ps.forEach((p) => {
  p.textContent = "******";
  // console.log(p.textContent)
  // p.remove();
});

// Add a new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new element from JS";
document.querySelector("body").appendChild(newParagraph);
