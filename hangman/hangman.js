const Hangman = function (word, guessNum) {
  this.word = word.toLowerCase().split("");
  this.guessNum = guessNum;
  this.guessedLetters = [];
  this.status = "playing";
};

Hangman.prototype.calculateStatus = function () {
  const finished = this.word.every((letter) =>
    this.guessedLetters.includes(letter)
  );
  // 1 approach
  // const lettersUnguessed = this.word.filter((letter) => {
  //   return !this.guessedLetters.includes(letter);
  // });
  // const finished = lettersUnguessed.length === 0;

  // 2 approach
  // let finished = true;
  // this.word.forEach((letter) => {
  //   if (this.guessedLetters.includes(letter)) {
  //   } else {
  //     finished = false;
  //   }
  // });

  if (this.guessNum === 0) {
    this.status = "failed";
  } else if (finished) {
    this.status = "finished";
  } else {
    this.status = "playing";
  }
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

  this.calculateStatus();
};
