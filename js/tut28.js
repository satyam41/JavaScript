console.log("Object Prototype in JavaScript.");

function Obj(givenName) {
    this.name = givenName;
}

Obj.prototype.getName = function () {
    return this.name;
}

Obj.prototype.setName = function (newName) {
    this.name = newName;
}

let obj = new Obj("Satyam");
console.log(obj);