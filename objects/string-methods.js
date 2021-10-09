let name = " Giedre Klima  ";

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let password = "123word098";
console.log(password.includes("password"));

console.log(name.trim());

let isValidPassword = (pswd) => {
  return pswd.length > 8 && !pswd.includes("password");
};

console.log(isValidPassword("asdg"));
console.log(isValidPassword("13435trtrdg&^%&"));
console.log(isValidPassword("123password"));
