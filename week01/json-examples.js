const myObject = {
    a: "This is a property a",
    mySecondObjectProperty: "second object property",
    "x": "the x key on my object",
    "2": "the key that is number 2",
    3: "key that is 3"
}

console.log("my object", myObject);

const moreLikeJSON = {
    "name": "Bev",
    "birthday": 08261996,
    "address": ["Chicago", "Los Angeles"],
    "isHuman": true,
    "personalInfo": {
        "favFood": "fries"
    }
}

console.log(moreLikeJSON);

const myInfoAsJSON = JSON.stringify(moreLikeJSON);
console.log(myInfoAsJSON);