// Multiple arguments
let add = (a, b, c) => {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = (name = "Anonymous", score = 0) => {
  return `Name: ${name}, Score: ${score}`;
};

let scoreText = getScoreText(undefined, 2);
console.log(scoreText);

//
let tipCounter = (total, tipPercent = 0.2) => {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip on $${total} would be $${tip}`;
};
let tip = tipCounter(50);
console.log(tip);
