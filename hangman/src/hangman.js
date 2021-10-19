class Hangman {
  constructor(word, guessNum) {
    this.word = word.toLowerCase().split("");
    this.guessNum = guessNum;
    this.guessedLetters = [];
    this.status = "playing";
  }
  calculateStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === " "
    );

    if (this.guessNum === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  get puzzle() {
    let puzzle = "";

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });

    return puzzle;
  }

  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.guessNum}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was "${this.word.join("")}".`;
    } else {
      return "Great work! You guessed the word.";
    }
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    // Disable new guess unless 'playing'
    if (this.status !== "playing") {
      return;
    }

    if (isUnique) {
      this.guessedLetters.push(guess);
    }

    if (isUnique && isBadGuess) {
      this.guessNum--;
    }

    this.calculateStatus();
  }
}

export { Hangman as default };
