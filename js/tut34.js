console.log("What is Asynchronous Programming?");

setTimeout(() => {
    for (let index = 1; index < 51; index++) {
        const element = index;
        console.log("This is index number: " + index);
    }
}, 2000);
console.log("Done Printing");
