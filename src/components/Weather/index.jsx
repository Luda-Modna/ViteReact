import React, { Component } from "react";
import { WeatherContext } from "./../../contexts/index.js";
import weatherLoad from "./weatherLoad.js";
import WEATHER_URL from "./constans.js";
import WeatherUnit from "./WeatherUnit.jsx";
import CurrentWeather from "./CurrentWeather.jsx";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: null,
      windSpeed: null,
      windDirection: null,
      isSelectedCelsius: true,
      isSelectKmH: true,
    };
  }

  calcUrl = () => {
    const { isSelectedCelsius, isSelectKmH } = this.state;
    return `${WEATHER_URL}${
      isSelectedCelsius ? "" : "&temperature_unit=fahrenheit"
    }${isSelectKmH ? "" : "&wind_speed_unit=ms"}`;
  };

  updateWeatherLoad = () => {
    const url = this.calcUrl();
    console.log("url:", url);
    // weatherLoad(url).then(({ weather, units }) => {
    //   this.setState({ weather, units });
    // });
    const isCelsius = this.state.isSelectedCelsius;
    const weather2 = {
      temperature: isCelsius ? 24.6 : 76.3,
      windSpeed: 8.5,
      windDirection: 306,
    };
    const unit2 = {
      temperatureUnit: isCelsius ? "°C" : "°F",
      windSpeedUnit: "km/h",
      windDirectionUnit: "°",
    };

    this.setState({ weather: weather2, units: unit2 });
  };

  componentDidMount() {
    this.updateWeatherLoad();
  }

  switchTemperatureUnit = (value) => {
    this.setState({ isSelectedCelsius: value === "celsius" }, () =>
      this.updateWeatherLoad()
    );
    console.log(value);
  };

  render() {
    const { weather, units } = this.state;

    if (!weather || !units) {
      return <p>Loading...</p>;
    }

    // const { temperature, windSpeed, windDirection } = weather;
    // const { temperatureUnit, windSpeedUnit, windDirectionUnit } = units;

    const contextValue = {
      onTemperatureUnitChange: this.switchTemperatureUnit,
      isSelectedCelsius: this.state.isSelectedCelsius,
    };
    console.log(this.state.isSelectedCelsius);

    return (
      <WeatherContext.Provider value={contextValue}>
        <WeatherUnit />
        <CurrentWeather weather={weather} units={units} />
      </WeatherContext.Provider>
    );
  }
}
