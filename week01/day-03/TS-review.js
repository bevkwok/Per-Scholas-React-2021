//// reason why sunnyDayMessage has an error message
// there are no separation or scope
var sunnyDayMessage = "it is sunny out today";
var isSunny = true;
var numberSunnyDays = 1;
/**
 *
 * @param isSunny
 *          if *today* it is sunny or not.
 * @param numberSunnyDays
 *          How many days in a row it has been sunny for.
 * @returns
 *          Returns a string saying hi, if it's sunny, and how many days in a row it has been sunny for
 *          Example:
 */
console.log(sunnyDayMessage);
function hello(name, isSunny) {
    if (!isSunny) {
        return "Hi, " + name + ". It's cloudy today!";
    }
    return "Hi, " + name + "It's sunny out today";
}
console.log(hello("Bev", true));
console.log(hello("David", false));
function theSunnyDayMessage(isSunny, numberSunnyDays) {
    return "";
}
// command + p (show list of file)
// tsc --watch (watch ts file)
// nodemon (watch js file)
