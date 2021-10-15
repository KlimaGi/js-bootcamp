const puzzleEl = document.querySelector("#puzzle");
const guessNumEl = document.querySelector("#guess-num");
const statusEl = document.querySelector("#status");
const game1 = new Hangman("chess", 4);

puzzleEl.textContent = game1.getPuzzle();
guessNumEl.textContent = game1.guessNum;
console.log(game1.status);
//statusEl.textContent = "playing";

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);

  puzzleEl.textContent = game1.getPuzzle();
  guessNumEl.textContent = game1.guessNum;
  console.log(game1.status);
  //statusEl.textContent = game1.status();
});
