const gradeCalc = (score, totalScore) => {
  if (typeof score !== "number" || typeof totalScore !== "number") {
    throw Error("Please provide numbers only");
  }
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

try {
  const text = gradeCalc(16, 20);
  console.log(text);
} catch (e) {
  console.log(e.message);
}
