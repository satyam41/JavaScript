console.log("More on JavaScript Events");

// let btn = document.getElementById('btn');
// btn.addEventListener("click", clickfunc1);
// btn.addEventListener("dblclick", clickfunc2);


// function clickfunc1(e) {
//     console.log("Thanks ", e);
//     e.preventDefault();
// };


// function clickfunc2(e) {
//     console.log("Thanks it is double click ", e);
//     e.preventDefault();
// };


document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log('You triggered mousemove event.');
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, ${e.offsetY})`
});

// Events in JavaScript
// mousemove
// mouseenter
// mouseleave