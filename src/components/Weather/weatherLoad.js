import WEATHER_URL from "./constans.js";

function weatherLoad() {
  return fetch(WEATHER_URL)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.current_weather;
      const currentWeather = {
        temperature: weather.temperature,
        windSpeed: weather.windspeed,
        windDirection: weather.winddirection,
      };

      const weatherUnit = data.current_weather_units;
      const currentWeatherUnits = {
        temperatureUnit: weatherUnit.temperature,
        windSpeedUnit: weatherUnit.windspeed,
        windDirectionUnit: weatherUnit.winddirection,
      };

      return { weather: currentWeather, units: currentWeatherUnits };
    })
    .catch((err) => console.log(err));
}

export default weatherLoad;
