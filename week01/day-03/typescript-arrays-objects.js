console.log("hi");
var todaysWeather = "rainy";
var weatherList = ["sunny", "cloudy", "rainy"];
// const weatherList: string[]
// or
// const weatherList: Array<string>
var wasItSunny = [true, false, false, true];
//// any = not a defined type
var anyType = 7;
anyType = "seven";
var anyArray = [1, "one", { one: 1 }, true];
//// example
var sunnyDayMessage;
function getSunnyDayMessage(isItSunny) {
    if (!isItSunny) {
        return "Not sunny today";
    }
    return "It is sunny!";
}
sunnyDayMessage = getSunnyDayMessage(false);
console.log(sunnyDayMessage);
