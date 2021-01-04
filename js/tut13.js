let a = "Hello friends how are you?";

a = document.links
Array.from(a).forEach(function (element) {
    if (element.href.includes("google")) {
        console.log(element.href);
    };
});

// console.log(a);

