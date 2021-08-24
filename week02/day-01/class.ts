////// CLASSES
// template for making objects
// special functions
// 2 components: class expressions and class declarations

console.log("hi");

type DailyForecasts = Array<DailyForecast>;
type DailyForecastID =  number;

interface ForecastsHandler {
    // forecasts: DailyForecasts,
    addNextDaysForecast: (a: DailyForecast) => number;
    getMostRecentForecast: () => number;
    getTodaysForecast: () => any, //function
    getForecastByID: (a: DailyForecastID) => DailyForecasts, //function
    getForecastDescription: () => string, //get readable description for a forecast. by date.

}

class WeeklyForecasts {
    private forecasts: DailyForecasts;
    constructor(forecasts: Array<DailyForecast>) {
        this.forecasts = forecasts;
    }

    addNextDaysForecast(forecast: DailyForecast) {
        this.forecasts.push(forecast) as DailyForecastID;
    }

    getTodaysForecast(): any {

    }

    getMostRecentForecast(): DailyForecasts {
        const mostRecentId: DailyForecastID = this.forecasts.length - 1;
        // const mostRecentForeCastId = this.forecasts[mostRecentId];
        return this.getForecastByID(mostRecentId);
    }

    getForecastByID(id: number): any {
        return this.forecasts[id];
    }

    getForecastDescription(id: DailyForecastID): any {
        const forcast = this.getForecastByID(id);
        // const date = forcast.date;
        // const temperature = forcast.temperature;
        // destructuring
        const { date, temperature, chanceOfRain } = forcast;
        const msg = `On ${date} the temperature is ${temperature}. Chance of rain is ${chanceOfRain}`;
        return msg;
    }
}

// const myWeatherHandler = 

type WEATHER_DESCRIPTION = "sunny" | "cloudy" | "rainy";


function getWeatherDescription(weatherType: WEATHER_DESCRIPTION) {
    switch(weatherType) {
        case "sunny":
            return "It's sunny";
        case "cloudy":
            return "It's cloudy";
        case "rainy":
            return "It's rainy";
    }
}

interface DailyForecast {
    date: string | Date,
    temperature: number,
    description: WEATHER_DESCRIPTION,
    chanceOfRain?: number
}

const todayForecast: DailyForecast = {
    date: "2021-08-22" as string, 
    temperature: 75 as number, 
    description: "cloudy" as WEATHER_DESCRIPTION, 
    chanceOfRain: 80 as number
}