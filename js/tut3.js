console.log("This is Variables tutorials.");
// Variables in JavaScript

// There are three keywords to define a variables :
// 1.var
// 2.let
// 3.const

// Rules for creating variables in JavaScript.
/*
1.Cannot start with number.
2.Always start with letter than you add number, underscore(_).
3.Cannot accept any special character execpt underscore(_), also execpt $ symbol.
4.Case Senstive
*/

// var can changeable in all program. var can work as global variable.

var name = "Satyam";
console.log(name);

// const cannot be changeable. const work as constant which cannot change in whole program.

const channel_name = "I Love Coding";
console.log(channel_name);

// let can changeable in any block. let can works as local variable.

let email = "thesatyam@gmail.com";
console.log(email);

const array = [12, 3, 31, 41, 2, 42];
console.log(array);
array.push(23);
console.log(array);
array.pop();
array.pop();
console.log(array);


/*
Most comman programming case:

1.camelCase
2.kebab-case
3.snack_case
4.PacalCase

*/