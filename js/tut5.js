// type conversion and type coercion

// Number to String Conversion.

let num;
// num = 12;
num = String(12);
console.log(num, (typeof num));

// String to Number Conversion.

let str = '23';
str = Number(str);
console.log(str, (typeof str));

// Array to String Conversion.

let arr = String([1, 2, 3, 4, 5]);
console.log(arr, (typeof arr));

// Date to String Conversion.

let date = String(new Date());
console.log(date, (typeof date));

// Second method of string conversion.

let i = 2;
console.log(i.toString());

// Number to String Conversion.

let number = Number('123');
number = Number('123d342');
number = Number([1, 2, 3, 4, 5]);
number = Number(true);
console.log(number, (typeof number));

let string = parseFloat('3.1994');
// string = parseInt('3.14');
console.log(string.toFixed(10), (typeof string));