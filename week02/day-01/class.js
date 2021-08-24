////// CLASSES
// template for making objects
// special functions
// 2 components: class expressions and class declarations
console.log("hi");
var WeeklyForecasts = /** @class */ (function () {
    function WeeklyForecasts(forecasts) {
        this.forecasts = forecasts;
    }
    WeeklyForecasts.prototype.addNextDaysForecast = function (forecast) {
        this.forecasts.push(forecast);
    };
    WeeklyForecasts.prototype.getTodaysForecast = function () {
    };
    WeeklyForecasts.prototype.getMostRecentForecast = function () {
        var mostRecentId = this.forecasts.length - 1;
        // const mostRecentForeCastId = this.forecasts[mostRecentId];
        return this.getForecastByID(mostRecentId);
    };
    WeeklyForecasts.prototype.getForecastByID = function (id) {
        return this.forecasts[id];
    };
    WeeklyForecasts.prototype.getForecastDescription = function (id) {
        var forcast = this.getForecastByID(id);
        // const date = forcast.date;
        // const temperature = forcast.temperature;
        // destructuring
        var date = forcast.date, temperature = forcast.temperature, chanceOfRain = forcast.chanceOfRain;
        var msg = "On " + date + " the temperature is " + temperature + ". Chance of rain is " + chanceOfRain;
        return msg;
    };
    return WeeklyForecasts;
}());
function getWeatherDescription(weatherType) {
    switch (weatherType) {
        case "sunny":
            return "It's sunny";
        case "cloudy":
            return "It's cloudy";
        case "rainy":
            return "It's rainy";
    }
}
var todayForecast = {
    date: "2021-08-22",
    temperature: 75,
    description: "cloudy",
    chanceOfRain: 80
};
