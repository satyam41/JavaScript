console.log("ES6 Classes and Inheritance");

class Employee {
    constructor(givenName, givenSalary, givenExperience, giveDivision) {
        this.name = givenName;
        this.salary = givenSalary;
        this.experience = givenExperience;
        this.division = giveDivision;
    }

    slogan() {
        return `I am ${this.name} & I am the best.`;
    }

    joiningYear() {
        return `Your experience is ${2020 - this.experience} year.`
    }

    getSalary() {
        if (this.salary < 10000) {
            return `Your salary is increased by ₹1000 now your salary is ₹${this.salary + 1000}.`;
        }
        else {
            return `Your salary is sufficient.`
        }
    }

    static add(a, b) {
        return a + b;
    }
}

let harry = new Employee("Satyam", 12000, 15, "Programmer");
// console.log(harry);

let harry1 = new Employee("Chesta", 9000, 10, "Programmer");
// console.log(harry1);

let harry2 = new Employee("Aditi", 12000, 14, "Programmer");
// console.log(harry2);

// console.log(Employee.add(20, 20));


class Programmer extends Employee {
    constructor(givenName, givenSalary, givenExperience, giveDivision, givenLanguage, givenGitHub) {
        super(givenName, givenSalary, givenExperience, giveDivision);
        this.language = givenLanguage;
        this.github = givenGitHub;
    }

    favoriteLang() {
        if (this.language == 'JavaScript') {
            return "JavaScript is your fav lang.";
        }
        else {
            return `${this.language} is your fav lang ${this.name}.`;
        }
    }

    static multiply(a, b) {
        return a * b;
    }
}
let satyam = new Programmer("Satyam", 12000, 12, "Programmer", "HTML", "satyam41");
console.log(satyam);