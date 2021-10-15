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
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  } else if (e.target.readyState === 4) {
    console.log("And error has taken place");
  }
});

request.open("GET", "http://puzzle.mead.io/puzzle");
request.send();

const countryCode = "MX";
const countryRequest = new XMLHttpRequest();

countryRequest.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    const country = data.find((country) => country.alpha2Code === countryCode);
    console.log(country.name);
  } else if (e.target.readyState === 4) {
    console.log("Unable to fetch data");
  }
});

countryRequest.open(
  "GET",
  "http://api.countrylayer.com/v2/all?access_key=90ced09cfc89936b70bfedf2ec75789b"
);
countryRequest.send();
