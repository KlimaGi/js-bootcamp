let greetUser = () => {
  console.log("Welcome user!");
};
greetUser();

let square = (num) => {
  let result = num * num;
  return result;
};

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

//
let convertFahrenheitToCelsius = (fahnum) => {
  let celsius = ((fahnum - 32) * 5) / 9;
  return celsius;
};

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
