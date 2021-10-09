const gradeCalc = (score, totalScore) => {
  const percent = (score / totalScore) * 100;
  let letter = "";
  if (percent >= 90) {
    letter = "A";
  } else if (percent >= 80) {
    letter = "B";
  } else if (percent >= 70) {
    letter = "C";
  } else if (percent >= 60) {
    letter = "D";
  } else {
    letter = "F";
  }

  return `${score}/${totalScore} -> You got a ${letter} (${percent}%)!`;
};

const text = gradeCalc(15, 20);
console.log(text);
