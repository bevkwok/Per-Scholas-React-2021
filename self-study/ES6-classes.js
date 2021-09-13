// class expression
// const PersonCl = class {}

// class declaration
class PersonCl { 
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // this method goes to the prototype, not the object itsel
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    sayHi() {
        console.log(`Hi ${this.firstName}`);
    }
}

const bev = new PersonCl('Bev', 1996);
console.log(bev);
bev.calcAge(); // 25

// or can add this to the prototype
PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
}

bev.greet(); // Hey, Bev


//////// *** things about classes

// Classes are not hoisted
// Classes are first-class citizens (class = special function)
// Classes are executed in strict mode