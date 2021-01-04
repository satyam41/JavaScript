console.log("Creating, Replacing and Removing Elements");

let element = document.createElement('li');
let text = document.createTextNode('This is wrtten by textNode');
element.appendChild(text);
// Adding class into the li elements.
element.className = 'bacha';
element.id = 'idname';
element.setAttribute('title', 'myTitle');
// element.innerText = ("Hello this is created by JavaScript");
// element.innerHTML = ("<b>Hello this is created by JavaScript</b>");
// console.log(element);

let ul = document.querySelector('ul.childern');
ul.appendChild(element);
// console.log(ul);

let element2 = document.createElement('h3');
element2.id = 'idelement';
element2.className = 'classelement';
let tNode = document.createTextNode('Hello, I am replacing otherone');
element2.appendChild(tNode);
element.replaceWith(element2);
// console.log(element2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('this'));
myul.removeChild(document.getElementById('mych'));

let getatt = element2.getAttribute('id');
getatt = element2.getAttribute('class');
// getatt = element2.hasAttribute('idelement');
element2.removeAttribute('id');
// console.log(getatt, element2);


let quiz = document.createElement('a');
let text_node = document.createTextNode('Go to CodeWithHarry');
quiz.setAttribute('herf', 'https://www.codewithharry.com');
quiz.setAttribute('target', '_blank');
quiz.appendChild(text_node);
// console.log(text_node);
let app = document.querySelector('ul');
app.appendChild(quiz);
// console.log(quiz);