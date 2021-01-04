console.log("Ajax in JavaScript");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("You have click on fetchBtn");
    // Instantiate an xhr object.
    const xhr = new XMLHttpRequest();

    // Open the object.
    xhr.open('GET', 'harry.txt', true);

    // Use this for POST Request.
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    // xhr.getResponseHeader('content-type', 'application/json')

    // What to do on progress.(optional)
    xhr.onprogress = function () {
        console.log("Work on progress.");
    }

    // What to do when response is ready.
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else if (this.status === 429) {
            console.log(this.responseText);
        }
        else {
            alert("Some error occured.")
            console.error("Some error occured.")
        }
    }

    // Send the request.
    // params = { "name": "Salfajdtyam", "salary": "123", "age": "23" }
    xhr.send();
}


// let popBtn = document.getElementById('popBtn');
// popBtn.addEventListener('click', popHandlerClick);

// function popHandlerClick() {
//     console.log("You have click on popBtn");
//     // Instantiate an xhr object.
//     const xhr = new XMLHttpRequest();

//     // Open the object.
//     // xhr.open('GET', 'harry.txt', true);

//     // Use this for POST Request.
//     // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
//     // xhr.getResponseHeader('Content-type', 'application/json')

//     // What to do on progress.(optional)
//     xhr.onprogress = function () {
//         console.log("Work on progress.");
//     }

//     // What to do when response is ready.
//     xhr.onload = function () {
//         if (this.status === 200) {
//             let obj = JSON.parse(this.responseText);
//             console.log(obj);
//         }
//         else if (this.status === 429) {
//             let obj2 = JSON.parse(this.responseText);
//             console.log(obj2);
//         }
//         else {
//             alert("Some error occured.")
//             console.error("Some error occured.")
//         }
//     }

    // Send the request.
//     xhr.send();

// }