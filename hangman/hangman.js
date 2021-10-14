const Hangman = function (word, guessNum) {
  this.word = word.toLowerCase().split("");
  this.guessNum = guessNum;
  this.guessedLetters = [];
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = "";

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });

  return puzzle;
};

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isBadGuess) {
    this.guessNum--;
  }
};

const game1 = new Hangman("chess", 4);

console.log(game1.getPuzzle());
console.log(game1.guessNum);

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  console.log(game1.getPuzzle());
  console.log(game1.guessNum);
});
