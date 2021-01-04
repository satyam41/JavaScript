console.time('Your code Took: ');
// console.log({ name: "Satyam", class: 12, Rollno: 12121 });
// console.table({ name: "Satyam", class: 12, Rollno: 12121 });
// console.warn("This is warning");
// console.clear();
// console.assert(17 >= 18, "This is not eligible for your age groups.");
// console.info(10 <= 18, "This is eligible for your age group.");
let age = 15;
if (age < 18) {
    console.error("This is not eligible for your age groups. If you wants to see this content you have to verify your age.");

    alert("This is not eligible for your age groups. If you wants to see this content you have to verify your age.");

    if (age == 18 == false) {
        let con = confirm("Want to verify your age?");
        if (con == true) {
            let agegrp = prompt("What is your age?");
            if (agegrp >= 18) {
                alert("You have virefied your age...");
            }
            else if (agegrp <= 18) {
                alert("Your age is under 18. So you cannot verify your age....");
            }
        }
    }
}
else {
    console.log("Consularation!!! You are eligible for this content");
}

console.timeEnd('Your code Took: ')