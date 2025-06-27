import React, { Component } from "react";
import { WeatherContext } from "./../../contexts/index.js";
import weatherLoad from "../../api/weatherLoad.js";
import WEATHER_URL from "./constans.js";
import WeatherUnit from "./WeatherUnit.jsx";
import CurrentWeather from "./CurrentWeather.jsx";
import styles from "./Weather.module.sass";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
      units: null,
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
    weatherLoad(url).then(({ weather, units }) => {
      this.setState({ weather, units });
    });
  };

  componentDidMount() {
    const storedUnits = window.localStorage.getItem("units");

    if (storedUnits) {
      const units = JSON.parse(storedUnits);

      const { temperature_unit, wind_speed_unit } = units;

      this.setState(
        {
          isSelectedCelsius: temperature_unit === "celsius",
          isSelectKmH: wind_speed_unit === "kmH",
        },
        () => {
          this.updateWeatherLoad();
        }
      );
    } else {
      this.updateWeatherLoad();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isSelectedCelsius, isSelectKmH } = this.state;

    if (
      prevState.isSelectedCelsius !== isSelectedCelsius ||
      prevState.isSelectKmH !== isSelectKmH
    ) {
      this.updateWeatherLoad();

      const units = {
        temperature_unit: isSelectedCelsius ? "celsius" : "fahrenheit",
        wind_speed_unit: isSelectKmH ? "kmH" : "ms",
      };

      window.localStorage.setItem("units", JSON.stringify(units));
    }
  }

  switchTemperatureUnit = (value) => {
    this.setState({ isSelectedCelsius: value === "celsius" });
  };

  switchWindSpeedUnit = (value) => {
    this.setState({ isSelectKmH: value === "kmH" });
  };

  render() {
    const { weather, units, isSelectedCelsius, isSelectKmH } = this.state;

    if (!weather || !units) {
      return <p>Loading...</p>;
    }

    const contextValue = {
      onTemperatureUnitChange: this.switchTemperatureUnit,
      onWindSpeedUnitChange: this.switchWindSpeedUnit,
      isSelectedCelsius: isSelectedCelsius,
      isSelectKmH: isSelectKmH,
    };

    return (
      <WeatherContext.Provider value={contextValue}>
        <main className={styles.mainContainer}>
          <WeatherUnit />
          <CurrentWeather weather={weather} units={units} />
        </main>
      </WeatherContext.Provider>
    );
  }
}
