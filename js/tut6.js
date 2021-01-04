console.log("Properties, Methods and Templates Literals in JavaScript");

// Funtions of String.

const name = "Satyam";
const greet = "Good Morning";
// console.log(greet + ' ' + name);

let html;
html = "<h1>This is my heading</h1>" +
    "<p>This is Paragraph</p>";

// concat function in String

html = html.concat(" This is concating method");
// console.log(html);

// // length function in String.

// console.log(html.length);

// // Convert all character into lowercase.

// console.log(html.toLowerCase());

// // Convert all character into uppercase

// console.log(html.toUpperCase());

// // Indexing in string.

// console.log(html[45]);

// console.log(html.indexOf('This'));

// console.log(html.lastIndexOf('This'));

// console.log(html.charAt(45));

// console.log(html.endsWith('This'));

// console.log(html.startsWith('<h1>'));

// console.log(html.includes('heading'));

// console.log(html.substring(4, 15));

// console.log(html.slice(-6));

// console.log(html.split(' '));

// console.log(html.replace("method", "function"));


// let fruit1 = "Mangos";
// let fruit2 = "Apples";
// let newhtml = `Hello ${name},
//         <h3> You Like Fruits</h3>
//         <p> You like ${fruit1} and ${fruit2}</p>`;


let friend1 = "Chesta";
let friend2 = "Aditi";

let writenhtml = `
<h1> Friends Name of ${name} is</h1>
<p> Name is ${friend1} and ${friend2}</p>
`;
document.body.innerHTML = writenhtml;
