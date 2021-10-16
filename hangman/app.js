const puzzleEl = document.querySelector("#puzzle");
const guessNumEl = document.querySelector("#guess-num");
const game1 = new Hangman("chess game", 4);

puzzleEl.textContent = game1.puzzle;
guessNumEl.textContent = game1.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);

  puzzleEl.textContent = game1.puzzle;
  guessNumEl.textContent = game1.guessNum;
  guessNumEl.textContent = game1.statusMessage;
});

getPuzzle("2").then(
  (puzzle) => {
    console.log(puzzle);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);

getCountry("MX").then(
  (country) => {
    console.log(country.name);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);
