let isAcountLocked = false;
let userRole = "user";

if (isAcountLocked) {
  console.log("Is account locked");
} else if (userRole === "admin") {
  console.log("Welcome Admin!");
} else {
  console.log("Welcome!");
}

let temp = 15;

if (temp <= 4) {
  console.log("It is freezing outside!");
} else if (temp >= 30) {
  console.log("It is hot outside!");
} else {
  console.log("Go for it. It is pretty nice out.");
}
