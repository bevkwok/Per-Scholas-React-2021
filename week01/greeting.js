



/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true
*/
const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];


/**
@param {string} name
    name of person
@parm  {string} gender
    Possible values of "gender" argument are "male", "female", "nonbinary"
@param {boolean} isSelf
@returns {string}
        greeting sentence
*/
function greeting(name, gender, isSelf) {
  // do stuff here ...
    let i = 0;
    if(gender === "male" && !isSelf){
        i = 1;
    } else if(gender === "female" & !isSelf){
        i = 2;
    } else if(isSelf === true){
        i = 0;
    } else {
        return  `${greetingWords[1]}, ${prefixes[3]} name are ${name}`; 
    }
      return  `${greetingWords[i]}, ${prefixes[i]} name is ${name}`; // use template literal for string to return
}

console.log(greeting("Bev", "female", true));
console.log(greeting("Sam", "male", false));
console.log(greeting("Alex", "nonbinary", false));



///////// Adam's soluation

function firstLetterUpperCase(word){
    let firstLetter = word.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    console.log(firstLetter);
    return firstLetter;
}