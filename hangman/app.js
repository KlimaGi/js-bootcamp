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

// Making an HTTP request
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  }
});

request.open("GET", "http://puzzle.mead.io/puzzle");
request.send();
