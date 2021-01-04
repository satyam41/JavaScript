console.log("What is Asynchronous Programming?");

setTimeout(() => {
    for (let index = 0; index < 50; index++) {
        const element = index;
        console.log("This is index number: " + index);
    }
}, 100);
console.log("Done Printing");
