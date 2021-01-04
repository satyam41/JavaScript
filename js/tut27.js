console.log("Object Literals, Constructors and Object Oriented JavaScript");

let car = {
    name: "Nissan",
    topSpeed: 150,
    openDoor: function () {
        console.warn("Gate is open.");
    },
    setBelt: function () {
        console.warn("Wear your seat belt.");
    },
};

// We have already seen constructors like these:
// new Date(), new Array() etc.

// Creating constructors for cars.
function generalCar(carName, carSpeed) {
    this.name = carName;
    this.speed = carSpeed;
    this.run = function () {
        console.log(`${this.name} is running.`);
    };
    this.analyze = function () {
        console.log(`${this.name} is slower by ${400 - this.speed} kmph than Dugati.`);
    };
};
let car1 = new generalCar("BMW", 200);
car1 = new generalCar("Jagwar", 220);
console.log(car1);