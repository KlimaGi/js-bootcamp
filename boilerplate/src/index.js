// const calculateAverage = (thing, ...numbers) => {
//   //return (numOne + numTwo) / 2;
//   let sum = 0;
//   numbers.forEach((num) => (sum += num));
//   const average = sum / numbers.length;
//   return `The average ${thing} is ${average}`;
// };

// console.log(calculateAverage("grade", 0, 100, 88, 64));

const printTeam = (team, coach, ...players) => {
  console.log(`Team: ${team}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(", ")}`);
};

const team = {
  name: "Liberty",
  coach: "Casey Penn",
  players: ["Marge", "Aiden", "Herbert", "Sherry"],
};

printTeam(team.name, team.coach, ...team.players);

let cities = ["Barcelona", "Cape Town", "Bordeaux"];
cities = [...cities, "Amsterdam"];

console.log(cities);
