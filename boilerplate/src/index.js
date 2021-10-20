const calculateAverage = (thing, ...numbers) => {
  //return (numOne + numTwo) / 2;
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  const average = sum / numbers.length;
  return `The average ${thing} is ${average}`;
};

console.log(calculateAverage("grade", 0, 100, 88, 64));

const printTeam = (team, coach, ...players) => {
  console.log(`Team: ${team}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(", ")}`);
};

printTeam("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry");
