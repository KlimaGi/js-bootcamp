const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

const date1 = new Date();
const date2 = new Date("2021 09 01");
const timestamp1 = date1.getTime();
const timestamp2 = date2.getTime();
const first = timestamp1 < timestamp2 ? timestamp1 : timestamp2;
console.log(new Date(first).toString());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);
