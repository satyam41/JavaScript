console.log("HTML Element Selector in JavaScript.");

/*
Element Selector:
1.Single Element Selector.
2.Multi Element Selector.
*/

// Single Element Selector.

let element = document.getElementById('child1');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'whitesmoke';
element.style.border = '2px solid black';
element.style.backgroundColor = 'black';
element.style.fontFamily = 'cursive';
element.style.fontSize = '20px';
element.innerHTML = '<b>Satyam</b>';
// console.log(element);

let sel = document.querySelector('#child1');
sel = document.querySelector('.child');
sel = document.querySelector('h1');
sel = document.querySelector('div');
sel.style.color = 'red';
sel.style.backgroundColor = 'red';
// console.log(sel);

// Multi Element Selector.

let ele = document.getElementsByClassName('child');
ele = document.getElementsByClassName('container');
// ele = document.getElementsByTagName('h1');
ele = document.getElementsByTagName('div');
// console.log(ele);
Array.from(ele).forEach(element => {
    // console.log(element);
    element.style.color = 'orange';
})
// console.log(ele[0].getElementsByClassName('child'));