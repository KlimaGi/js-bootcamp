const Hangman = function (word, guessNum) {
  this.word = word;
  this.guessNum = guessNum;
};

const game1 = new Hangman("chess", 5);
console.log(game1);

const game2 = new Hangman("queen", 3);
console.log(game2);
