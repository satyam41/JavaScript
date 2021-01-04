console.log("Events and Event object in JavaScript");

document.getElementById('head').addEventListener('click', function (e) {
    let variable;
    console.log("You have clicked on heading");
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
});

// Events of JavaScript
// 1.click
// 2.mouseover
// 3.mouseout
// 4.mousedown
// 5.mouseup
// 6.mousemove
// 7.keydown & keyup