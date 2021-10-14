// with arrow there is no |arguments|
const add = function () {
  return arguments[0] + arguments[1];
};

console.log(add(11, 22, 33, 44));

// with arrow |this| is |undefined|
// but with method definition syntax |this| works
const car = {
  color: "red",
  getSummary() {
    return `This car is ${this.color}`;
  },
};
console.log(car.getSummary());
