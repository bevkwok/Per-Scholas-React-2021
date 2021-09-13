//////// Prototype
// all function in JS already have a properties called prototype


const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const bev = new Person('Bev', 1990);

console.log(bev);

Person.prototype.calcAge = function () {
    console.log(2021 - this.birthYear);
};

bev.calcAge();