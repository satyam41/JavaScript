console.log("For, While & Do while loops in JavaScript.");

// Genral loops in JavaScript is for, while and do while.

// for loop

// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }

// while loop

// i = 11;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// do while loops

// i = 1;
// do {
//     if (i === 7) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++
// } while (i <= 10);

// console.log("Done Beta kitna chaloge thak javoge...")

// Mordern Methods

let arr = [1, 2, 3, 4, 5];
arr.forEach(function (element, index, array) {
    console.log(element, index, array);
});

// Old Method

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

// let obj = {
//     Name: "Satyam",
//     age: 18,
//     type: "Programer",
//     os: "Windows"
// };
// for (let key in obj) {
//     console.log(`${key} of object is ${obj[key]}`);
// }