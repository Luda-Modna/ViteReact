import React, { useEffect, useState } from 'react';
import { WeatherContext } from '../../contexts/index.js';
import weatherLoad from '../../api/weatherLoad.js';
import WEATHER_URL from './Constans/weatherURL.js';
import WEATHER_UNITS from './Constans/weatherUnits.js';
import WeatherUnit from './WeatherUnit.jsx';
import CurrentWeather from './CurrentWeather.jsx';
import styles from './Weather.module.sass';

const {
  TEMPERATURE_UNITS: { CELSIUS, FAHRENHEIT },
  WIND_UNITS: { KM_H, MS },
  TEMPERATURE_UNITS_FOR_UI,
  WIND_UNITS_FOR_UI,
} = WEATHER_UNITS;

function WeatherLoaderH () {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState({
    temperature_unit: CELSIUS,
    wind_speed_unit: KM_H,
  });
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedUnits = localStorage.getItem('units');
    if (savedUnits) {
      try {
        setUnits(JSON.parse(savedUnits));
      } catch {
        setError('Використано дефолтні завантаження');
      }
    }
  }, []);

  const calcUrl = () => {
    const { temperature_unit, wind_speed_unit } = units;

    let url = WEATHER_URL;

    if (temperature_unit === 'fahrenheit') {
      url += `&temperature_unit=fahrenheit`;
    }

    if (wind_speed_unit === 'ms') {
      url += `&wind_speed_unit=ms`;
    }

    return url;
  };

  useEffect(() => {
    const url = calcUrl();

    setIsFetching(true);
    setError(null);

    try {
      localStorage.setItem('units', JSON.stringify(units));
    } catch (e) {
      console.warn('Не вдалося зберегти units у localStorage:', e);
    }

    weatherLoad(url)
      .then(({ weather }) => {
        setWeather(weather);
      })
      .catch(err => {
        console.error('Помилка під час завантаження погоди:', err);
        setError('Не вдалося завантажити погоду');
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [units]);

  const switchTemperatureUnit = value => {
    setUnits(prev => ({
      ...prev,
      temperature_unit: value,
    }));
  };

  const switchWindSpeedUnit = value => {
    setUnits(prev => ({
      ...prev,
      wind_speed_unit: value,
    }));
  };

  const contextValue = {
    onTemperatureUnitChange: switchTemperatureUnit,
    onWindSpeedUnitChange: switchWindSpeedUnit,
    units,
    UNITS: { CELSIUS, FAHRENHEIT, KM_H, MS },
    TEMPERATURE_UNITS_FOR_UI,
    WIND_UNITS_FOR_UI,
  };

  if (!weather || !units) {
    return <p>Loading...</p>;
  }

  return (
    <WeatherContext.Provider value={contextValue}>
      <main className={styles.mainContainer}>
        <WeatherUnit />
        <CurrentWeather weather={weather} />
      </main>
    </WeatherContext.Provider>
  );
}

export default WeatherLoaderH;
