////// Function

//// function expression (anonymous function)

// console.log(age1); 
// ReferenceError: Cannot access 'age1' before initialization
const findAge1 = function (birthYear) {
    return 2021 - birthYear;
}

const age1 = findAge1(1990);
console.log(age1); // works

//// function declaration
// console.log(age2); 
// works


function findAge2(birthYear) {
    return 2021 - birthYear
}

const age2 = findAge2(1986);
console.log(age2); // works



// function declaration vs function expression
// you can call functino declaration before it's defined.
// function expression is more structure. 


//// Arrow function
birthYear => 2037 - birthYear;

const findAge3 = birthYear => 2037 - birthYear;
const age3 = findAge3(1995);
console.log(age3);

const retirementAge = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
const retireIn = retirementAge(2000);
console.log(retireIn);
// arrow function doesn't get the this keyword


//// function calling another function
function cutFruit(fruit) {
    return fruit = 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangesPieces = cutFruit(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));
// function order
// 1 - fruitProcessor


//// this keyword and arrow function
const bev = {
    firstName: 'Beverly',
    year: 1991,
    calcAge: function () {
        console.log(this);
    },
    greet: () => {
        console.log(`Hey ${this.firstName}`);
    },
    // this inside greet points to global variable
    correctGreet: function () {
        console.log(`Hey ${this.firstName}`);
    },
    // ^ not an arrow function so can use this keyword.
};


const greetBev = bev.greet(); // Hey undefined, arrow function no this

const greetBevCorrectly = bev.correctGreet(); // Hey Beverly

//// another pitfall for this keyword
bev.calcAge();