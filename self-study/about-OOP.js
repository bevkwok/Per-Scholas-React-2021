//////// What is OOP?
// a way to write code based on the concept of objects
// to model real world or abstract features
// object = self-contained pieces/block of code
// building blocks of applications that interact with one another

////// Class
// a blueprint to create new object follow certain rules inside the class

////// Instances
// an object create from a class = instance


//////// OOP in JS
// object in JS are linked to prototype object
// prototype has method
// all object link to that prototype can use those method
// it's called prototypal inheritance / delegation
// ex: array delegated the behavior of mapping from it's prototype

//// ways to use OOP in JS
// Constructor functions
// ES6 Classes (syntactic sugar for constructor functions)
// Object.create()


//// construct function 
// Capital letter when using construction function
// can't use arrow function
const Person = function(firstName, birthYear) {
    console.log(this);

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this (don't do method inside constructor function)
    // this.calcAge = function() {
    //     console.log(2021 - this.birthYear);
    // }
    // do prototype inheritance instead
}

const bev = new Person('Bev', 1990);

console.log(bev);
// what happened behind the scene
// 1. New object is created
// 2. function is called, this = new object, new operator is calling the function
// 3. this new object is linked to prototype
// 4. Object is automatically returned

const ken = new Person('Ken', 1983);
const jack = new Person('Jack', 1993);
console.log(ken, jack);

// all bev, ken, jack are instance of Person
