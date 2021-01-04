// Constructor
function Book(name, author, type, email) {
    this.bookName = name;
    this.authorName = author;
    this.type = type;
    this.email = email;
}

// Display Constructor
function Display() {

}

// Add method to display prototype.
// add & clear function goes here

Display.prototype.add = function (book) {
    console.log("Adding to UI.")
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.bookName}</td>
                        <td>${book.authorName}</td>
                        <td>${book.type}</td>
                        <td>${book.email}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}
// Implement the clear function.
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
// Implement the validate function.
Display.prototype.validate = function (book) {
    if (book.bookName.length <= 3 || book.authorName.length < 5) {
        return false;
    }
    else {
        return true;
    }
}

// Implement the show function.
Display.prototype.show = function (type, message) {
    let alert = document.getElementById('alert');
    alert.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${type}!</strong> ${message}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                            </button>
                        </div>`
    setTimeout(() => {
        alert.innerHTML = ''
    }, 2000);
}

// Data store in localStorage.
let btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    let bname = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let email = document.getElementById('email').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let ghost = document.getElementById('ghost');
    let data = localStorage.getItem('data');
    if (data == null) {
        dataObj = [];
    }
    else {
        dataObj = JSON.parse(data);
    }
    let myData = {
        name: bookName.value,
        author: authorName.value,
        email: email.value
    };
    dataObj.push(myData);
    localStorage.setItem('data', JSON.stringify(dataObj));
    console.log(dataObj);
})


// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submitted library form.");
    let bname = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let email = document.getElementById('email').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let ghost = document.getElementById('ghost');
    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (ghost.checked) {
        type = ghost.value
    }

    let book = new Book(bname, author, type, email)
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been succssfully added.');
    }
    else {
        // Show error to the user
        display.show('danger', ' Sorry you cannot add this book.');
    }

    e.preventDefault();
}
