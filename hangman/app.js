// Primitive value: string, number, boolean, null, undefined
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const product = "Computer";
console.log(product);

// const otherProduct = new String("Phone");
// console.log(otherProduct);

// const isTrue = new Boolean(true);
// console.log(isTrue);

// --------------------
// Object: myObject --> Object.prototype --> null

// const product = {
//   name: "Influence",
// };

// // hasOwnProperty
// console.log(product.hasOwnProperty("name")); // true
// --------------------
// Array: myArray --> Array.prototype --> Object.prototype --> null

// const team = ["Luke", "Madison"];
// console.log(team.hasOwnProperty("length"));

// --------------------
// Function: myFunc --> Function.prototype --> Object.prototype --> null

// const getScore = () => 1;
// console.log(getScore);
