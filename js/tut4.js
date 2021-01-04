/*
Data types in JavaScript:
    1.Premitive data type:
        (i)Strings:- Collections of Characters.
        (ii)Numbers:- Collection of all whole numbers, integers and floating numbers.
        (iii)Boolean:- Collections of "true" and "false" value.
        (iv)Null:- Refers to none value.
        (v)Undefined:- Defaults values of any variables are undefined.
        (vi)Symbol:-

    2.Reference data type:
        (i)Arrays:- Collections of all data types.
        (ii)object Literals:- s
        (iii)Function
        (iv)Dates
*/

// Premitive Data Type

// String

let name = "Satyam";
console.log("My name is " + name);
console.log("Data type is " + (typeof name));

// Number

let num1 = 34;
let num2 = 3.4;
let num3 = -34;
console.log("This is integer number " + num1);
console.log("Data Type is " + typeof num1);
console.log("This is decimal/floting number " + num2);
console.log("Data Type is " + typeof num2);
console.log("This is negative number number " + num3);
console.log("Data Type is " + typeof num3);

//Boolean

let boolt = true;
let boolf = false;
console.log("This is boolean value " + boolt);
console.log("Data Type is " + typeof boolt);
console.log("This is boolean value " + boolf);
console.log("Data Type is " + typeof boolf);

// Null

let nullvar = null;
console.log("This is null value " + nullvar);
console.log("Data Type is " + typeof nullvar);

// Undefined

let undef = undefined;
console.log("This is undefined value " + undef);
console.log("Data Type is " + typeof undef);

// Symbol



//Reference data Type

// Arrays

let arr = [21, 2, 34, 56, 34, "Satyam", true, null, undefined];
console.log(arr);
console.log("Data Type is " + typeof arr);

// Object

let bio = {
    Name: "Satyam",
    Class: 12,
    RollNo: 12121,
    School: "K.V.No.1 G.C.F. Jabalpur",
};
console.log(bio);
console.log("Data Type is " + typeof bio);

// Function with for loop

function greet(name) {
    console.log("Good Morning " + name);
};
console.log("Data Type is " + typeof greet);

let nameoffriends = ["Satyam", "Harry", "Manas", "Rahul", "Hardik", "Chesta", "Arapna", "Aditi"];
for (let index = 0; index < nameoffriends.length; index++) {
    const element = nameoffriends[index];
    greet(element);
}

// Dates

let date = new Date();
console.log("Current date is " + date);
console.log("Data Type is " + typeof date);