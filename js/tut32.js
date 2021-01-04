/*create a class library and implement the following:
constructor must be take the book list as an argument
getBookList()
issueBook(bookName, userName)
returnBook(bookName)
*/

class Library {
    constructor(bookList) {
        this.book = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName, userName) {
        if (this.issuedBooks[bookName] == undefined) {
            this.issuedBooks[bookName] = userName;
            alert("Your book is issued");
            localStorage.removeItem(bookName);
        }
        else {
            alert("This book is already issued to someone else");
        }
    }

    returnBook(bookName) {
        this.returnBooks[bookName] = this.returnBooks;
        localStorage.setItem(bookName);
    }
}

let list = ['Python', 'HTML', 'CSS', 'JavaScript', 'Java'];
lib = new Library(list);
localStorage.setItem('Book Name', 'Author Name');
localStorage.setItem('Python', 'Sumita Arora');
localStorage.setItem('HTML', 'Sumita Arora');
localStorage.setItem('CSS', 'Sumita Arora');
localStorage.setItem('JavaScript', 'Sumita Arora');
localStorage.setItem('Java', 'Sumita Arora');
// lib.issueBook(book, user);
let choice = prompt("Enter your choice from 1 to 4: ");
console.log(choice);
while (true) {
    if (choice == 1) {
        console.table({
            'Book Name': 'Author Name',
            'Python': 'Sumita Arora',
            'Java': 'Sumita Arora',
            'JavaScript': 'Sumita Arora',
            'HTML': 'Sumita Arora',
            'CSS': 'Sumita Arora'
        });
        break
    }
    else if (choice == 2) {
        let book = prompt("Enter the name of book to issue from the library: ");
        let user = prompt("Enter your name: ");
        lib.issueBook(book, user);
        console.log(book, user);
        break
    }
    else if (choice == 3) {
        let ret = prompt("Enter the name of book to return the book to the library: ");
        lib.returnBook(ret);
        console.log(ret);
        break
    }
    else if (choice == 4) {
        alert("Thank You");
        break
    }
    else {
        alert("Please enter correct option.")
        break
    }
}