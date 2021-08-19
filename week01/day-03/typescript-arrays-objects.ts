console.log("hi");

const todaysWeather: string = "rainy";

const weatherList: string[] = ["sunny", "cloudy", "rainy"];
// const weatherList: string[]
// or
// const weatherList: Array<string>

const wasItSunny: Array<boolean> = [true, false, false, true];

//// any = not a defined type
let anyType:any = 7;
anyType = "seven";


const anyArray: Array<any> = [1, "one", {one: 1}, true];

//// example
let sunnyDayMessage: string | boolean;

function getSunnyDayMessage(isItSunny): string | boolean {
    if(!isItSunny) {
        return "Not sunny today";
    }

    return "It is sunny!";
}

sunnyDayMessage = getSunnyDayMessage(false);

console.log(sunnyDayMessage);