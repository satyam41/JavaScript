console.log("Local & Session Storage in JavaScript");
let compLang = ['Python', 'JAVA', 'HTML', 'CSS', 'JavaScript'];
// Add a key value pair inside localStorage.
localStorage.setItem('Name', 'Satyam');
localStorage.setItem('Friend', 'Chesta');
localStorage.setItem('Computer Languages', JSON.stringify(compLang));

// Clear the entire localStorage
// localStorage.clear();

// Clear a prticular key-value pair
// localStorage.removeItem('Name');

// Get item from localStorage.
let name = localStorage.getItem('Name');
console.log(name);
let friend = localStorage.getItem('Friend');
console.log(friend);
let comp = JSON.parse(localStorage.getItem('Computer Languages'));
console.log(comp);

sessionStorage.setItem('Name', 's_Satyam');
sessionStorage.setItem('Name2', 's_Chesta');
sessionStorage.setItem('Computer Languages', JSON.stringify(compLang));

let name1 = sessionStorage.getItem('Name');
console.log(name);
let friend1 = sessionStorage.getItem('Name2');
console.log(friend);
let comp1 = JSON.parse(sessionStorage.getItem('Computer Languages'));
console.log(comp);