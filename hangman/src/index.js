import Hangman from "./hangman";
import getPuzzle from "./requests";

const puzzleEl = document.querySelector("#puzzle");
const guessNumEl = document.querySelector("#guess-num");
let game1;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  guessNumEl.textContent = game1.statusMessage;

  game1.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
