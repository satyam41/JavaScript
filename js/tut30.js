console.log("Prototype Inheritance in JavaScript");

const proto = {
    slogan: function () {
        return `Canara Bank Together We Can.`;
    },
    changeName: function (newName) {
        this.name = newName;
    }
};

// This create satyam object.

const satyam = Object.create(proto);
satyam.name = "Satyam";
satyam.role = "Programmer";
satyam.changeName("Aditi");
// console.log(satyam);

// This method also create any object.
// This create sat object.

const sat = Object.create(proto, {
    name: { value: "Satyam", writable: true },
    role: { value: "Programmer" },
});
sat.changeName("Chesta");
// console.log(sat);


// Employee constructor.

function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan

Employee.prototype.slogan = function () {
    return `KVS is best. Regards ${this.name}`;
}

let emp = new Employee("Satyam", 12000, 10);
// console.log(emp.slogan());


// Programmer

function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype

Programmer.prototype = Object.create(Employee.prototype);

// Maually set the constructor.
Programmer.prototype.consructor = Programmer;

let prog = new Programmer("Satyam", 12000, 20, "JavaScript");
console.log(prog);