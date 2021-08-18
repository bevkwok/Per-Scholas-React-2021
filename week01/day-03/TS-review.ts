//// reason why sunnyDayMessage has an error message
// there are no separation or scope

const sunnyDayMessage: string = "it is sunny out today";

let isSunny: boolean = true;

let numberSunnyDays: number = 1;

/**
 * 
 * @param isSunny
 *          if *today* it is sunny or not.
 * @param numberSunnyDays
 *          How many days in a row it has been sunny for.
 * @returns
 *          Returns a string saying hi, if it's sunny, and how many days in a row it has been sunny for
 *          Example: "Hi! It is sunny today. it has been sunny for 4 days in a row"
 */

console.log(sunnyDayMessage);


function hello(name: string, isSunny: boolean) {
    if(!isSunny) {
        return "Hi, " + name + ". It's cloudy today!"
    }
    return "Hi, " + name + "It's sunny out today";
}

console.log(hello("Bev", true));
console.log(hello("David", false));


function theSunnyDayMessage(isSunny: boolean, numberSunnyDays: number): string {
    return "";
}

// command + p (show list of file)

// tsc --watch (watch ts file)
// nodemon (watch js file)