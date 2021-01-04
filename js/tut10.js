console.log("Function and Scope in JavaScript");

// This is first method for define any functions.

// function greet(name, thank = "Thanks for comming to the party.") {
//     console.log("Happy Birthday " + name + thank);
// }

// This is second method for define any functions.

mygreet = function (name, thank = "Thanks for comming to the party.") {
    console.log("Happy Birthday " + name + thank);
}
mygreet("Satyam! ");


const myobj = {
    Name: "Satyam",
    game: function () {
        return "GTA";
    }
}

console.log(myobj.game());