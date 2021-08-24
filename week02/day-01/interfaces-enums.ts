console.log("hi");

// type WEATHER_DESCRIPTION = "sunny" | "cloudy" | "rainy";

interface DailyForecast {
    date: string | Date,
    temperature: number,
    description: WEATHER_DESCRIPTION,
    chanceOfRain?: number
}

const obj = {
    a: 1,
    b: 2,
    c: 3
}

// const todaysForecast = {"2021-08-22" as string, 75 as number, "cloudy" as string, 80 as number}

const todaysForecast: DailyForecast = {
    date: "2021-08-22" as string, 
    temperature: 75 as number, 
    description: "cloudy" as WEATHER_DESCRIPTION, 
    chanceOfRain: 80 as number
}

const forcasts:Array<DailyForecast> = [
    todaysForecast
]

// function getWeatherDescription(weatherType) {
//     switch(weatherType) {
//         case "sunny":
//             return "It's sunny";
//         case "cloudy":
//             return "It's cloudy";
//         case "rainy":
//             return "It's rainy";
//     }
// }

////// enum example

enum Language {
    english = 1,
    french = 2,
    spanish = 3,
}

// function sunnyLanguage(language) {
//     switch(language) {
//         case "en":
//             return "It's sunny";
//         case "fr":
//             return "It's cloudy";
//         case "es":
//             return "It's rainy";
//     }
// }

function sunnyLanguage(language) {
    switch(language) {
        case Language.english:
            return "English";
        case Language.french:
            return "French";
        case Language.spanish:
            return "Spanish";
    }
}