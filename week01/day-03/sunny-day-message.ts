
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

function todaySunnyDayMessage(isSunny: boolean, numberSunnyDays: number): string {
    let sunnyDayMessage: string = "Error";
    if(!isSunny) {
        sunnyDayMessage = "Hi! It's cloudy today"
    } else {
        sunnyDayMessage = `Hi! It is sunny today. it has been sunny for ${numberSunnyDays} days in a row`
    }
    return sunnyDayMessage;
}