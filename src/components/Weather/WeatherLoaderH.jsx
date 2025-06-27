import React, { useEffect, useState } from "react";
import { WeatherContext } from "../../contexts/index.js";
import weatherLoad from "../../api/weatherLoad.js";
import WEATHER_URL from "./Constans/weatherURL.js";
import WEATHER_UNITS from "./Constans/weatherUnits.js";
import WeatherUnit from "./WeatherUnit.jsx";
import CurrentWeather from "./CurrentWeather.jsx";
import styles from "./Weather.module.sass";

const {
  TEMPERATURE_UNITS: { CELSIUS, FAHRENHEIT },
  WIND_UNITS: { KM_H, MS },
} = WEATHER_UNITS;

function createInitialIsCelsius() {
  const unit = localStorage.getItem("units");
  if (unit) {
    try {
      const { temperature_unit } = JSON.parse(unit);
      return temperature_unit === CELSIUS;
    } catch {}
  }
  return true;
}

function createInitialIsKmH() {
  const unit = localStorage.getItem("units");
  if (unit) {
    try {
      const { wind_speed_unit } = JSON.parse(unit);
      return wind_speed_unit === KM_H;
    } catch {}
  }
  return true;
}

function WeatherLoaderH() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState(null);
  const [isSelectedCelsius, setIsSelectedCelsius] = useState(
    createInitialIsCelsius
  );
  const [isSelectKmH, setIsSelectKmH] = useState(createInitialIsKmH);

  const calcUrl = () => {
    return `${WEATHER_URL}${
      isSelectedCelsius ? "" : "&temperature_unit=fahrenheit"
    }${isSelectKmH ? "" : "&wind_speed_unit=ms"}`;
  };

  const updateWeatherLoad = () => {
    const url = calcUrl();

    weatherLoad(url).then(({ weather, units }) => {
      
      setWeather(weather);
      setUnits(units);
    });
  };

  useEffect(() => {
    updateWeatherLoad();

    const updatedUnits = {
      temperature_unit: isSelectedCelsius ? CELSIUS : FAHRENHEIT,
      wind_speed_unit: isSelectKmH ? KM_H : MS,
    };

    window.localStorage.setItem("units", JSON.stringify(updatedUnits));
  }, [isSelectedCelsius, isSelectKmH]);

  const switchTemperatureUnit = (value) => {
    setIsSelectedCelsius(value === CELSIUS);
  };

  const switchWindSpeedUnit = (value) => {
    setIsSelectKmH(value === KM_H);
  };

  const contextValue = {
    onTemperatureUnitChange: switchTemperatureUnit,
    onWindSpeedUnitChange: switchWindSpeedUnit,
    isSelectedCelsius,
    isSelectKmH,
    UNITS: { CELSIUS, FAHRENHEIT, KM_H, MS },
  };

  if (!weather || !units) {
    return <p>Loading...</p>;
  }

  return (
    <WeatherContext.Provider value={contextValue}>
      <main className={styles.mainContainer}>
        <WeatherUnit />
        <CurrentWeather weather={weather} units={units} />
      </main>
    </WeatherContext.Provider>
  );
}

export default WeatherLoaderH;
