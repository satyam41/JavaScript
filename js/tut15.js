console.log('Children, Parent & Traversing the DOM');

let constn = document.querySelector('.heading');
constn = document.querySelector('.container');
let nodename = constn.childNodes[1].nodeName;
let nodeType = constn.childNodes[0].nodeType;
// console.log(nodename);
// console.log(nodeType);
// console.log(constn.childNodes);
// console.log(constn.children);

let sel = document.querySelector('.container');
// console.log(sel.children[0].children);
// console.log(sel.firstChild);
// console.log(sel.firstElementChild);
// console.log(sel.lastChild);
// console.log(sel.lastElementChild);
// console.log(sel.childElementCount);  // counts of child elements.
console.log(sel.firstElementChild.parentNode);
console.log(sel.firstElementChild.nextSibling);
// console.log(sel.firstElementChild.nextElementSibling);
// Node Type :
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. Document
// 10. docType