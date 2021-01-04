console.log("Date Object: Date and Time in JavaSCript");

let today = new Date();
// console.log(today);
let otherDate = new Date('6-26-2002 07:54:00');
console.log(otherDate);

let a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMonth();
a = otherDate.getFullYear();
a = otherDate.getMinutes();
a = otherDate.getHours();
a = otherDate.getSeconds();
// console.log(a);

otherDate.setDate(2);
otherDate.setMonth(11);
otherDate.setFullYear(2020);
otherDate.setMinutes(56);
otherDate.setHours(8);
console.log(otherDate);