console.log("If Else and Switches in JavaScript");

// If age == 18 then you can drive any bick, and age == 20 or above 20 then you can drive car also and your age is less than 18 you can only drive cycle.

// = is assign any value to the variables.
// == check first number is equal to the second number.
// === checks first number is equal to the second number also check data types.  
// || Symbol of "or".
// && check both condition is true or not.
// shorthand: console.log(age==18? 'Age is 18':'Age is not 18');

// switch (age) {
//     case 18:
//         console.log("You are 18.");
//         break;
//     case 28:
//         console.log("You are 28.");
//         break;
//     default:
//         console.log("What is your age.")
//         break;
// }


// if (typeof variable !== 'undefined') {
//     console.log("Variable is defined");
// }
// else {
//     console.log("Variable is not defined");
// }

function ageVerification(age) {

    if (age <= 10) {
        console.log(`Your age is so small so you cannot drive anything.`)
        alert(`Your age is so small so you cannot drive anything.`)
    }
    else if (age >= 16 & age < 18) {
        console.log(`You can learn driving any vechiles`);
        alert(`You can learn driving any vechiles`);
    }
    else if (age > 10 & age < 18) {
        console.log(`"You can drive "Bicycle".`);
        alert(`"You can drive "Bicycle".`);
    }
    else if (age >= 18 & age < 20) {
        console.log(`You can drive "Bick".`);
        alert(`You can drive "Bick".`);
    }
    else if (age >= 20 & age < 70) {
        console.log(`You can drive "Car" and "Bick".`)
        alert(`You can drive "Car" and "Bick".`)
    }
    else if (age >= 70) {
        console.log(`You can't drive because of you are so old. Please hair any driver for yourself.`)
        alert(`You can't drive because of you are so old. Please haire any driver for yourself.`)
    }
};

// ageVerification(17);

// let paperName = "Times of India";
function newsPaper(paperName) {
    if (paperName == "Times of India") {
        let phtml = `<h1><u>THE TIMES OF INDIA</u></h1>
        <p><b><i>1.Joe Biden pledges to unite America in victory speech.</i></b></p>
        <p><b><i>2.DeMo gave boost to transparency, improved tax compliance:Modi.</i></b></p>
        <p><b><i>3.Army officer among 4 security personnel martyred in Kashmir.</i></b></p>
        <p><b><i>4.Computer Baba held during demolition drive at his ashram.</i></b></p>
        <p><b><i>5.Tribles burned alive for failing to repay ₹5k lockdown loan.</i></b></p>`
        document.body.innerHTML = phtml;
    }
    else if (paperName == "Hindustan Times") {
        let p1html = `<h1><u>HINDUSTAN TIMES</u></h1>
        <p><b><i>1.India to start training from Nov 13.</i></b></p>
        <p><b><i>2.Trailbazers will look to stop Supernovas' Atapattu.</i></b></p>
        <p><b><i>3.What goe on in team camps before the high voltage final?</i></b></p>
        <p><b><i>4.Nadal says Paris run helpful for London.</i></b></p>
        <p><b><i>5.Classy Chelsea outclass Sheffield.</i></b></p>`
        document.body.innerHTML = p1html;
    }
    else if (paperName == "Patrika") {
        let p2html = `<h1><u>PATRIKA</u></h1>
        <p><b><i>1.More children beat Covid but recovery time rises to 11 days.</i></b></p>
        <p><b><i>2.Collage gates set to reopen as UGC issue Covid guidelines.</i></b></p>
        <p><b><i>3.Strongroom security bothers contestants.</i></b></p>
        <p><b><i>4.28% active Covid-19 cases 'missing' from health bulletin.</i></b></p>
        <p><b><i>5.Rabi sowing picks up, acreage under wheat may go up.</i></b></p>`
        document.body.innerHTML = p2html;
    }
}
setInterval(newsPaper, 5000);
console.log("Please wait for a minitue....");
console.log("Opening you favourate news paper for you.....");
let namePaper = prompt("Which news paper you want to read? Sir.")
// let userPaper = "Times of Inida";
if (namePaper == "Times of India") {
    newsPaper("Times of India");
}
else if (namePaper == "Hindustan Times") {
    newsPaper("Hindustan Times");
}
else if (namePaper == "Patrika") {
    newsPaper("Patrika");
}
else {
    alert("Thank you for Visiting this page.")
}