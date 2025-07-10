import React, { useContext } from 'react';
import { FaWind } from 'react-icons/fa';
import { WeatherContext } from './../../contexts/index';
import TemperatureIcon from './TemperatureIcon';
import WindDirectionIcon from './WindDirectionIcon';
import styles from './Weather.module.sass';

function CurrentWeather ({ weather }) {
  const { units, TEMPERATURE_UNITS_FOR_UI, WIND_UNITS_FOR_UI } = useContext(
    WeatherContext
  );

  const { temperature, windSpeed, windDirection } = weather;

  return (
    <article className={styles.currentWeatherContainer}>
      <h2>Current Weather</h2>
      <ul>
        <li>
          <TemperatureIcon temperature={temperature} />
          {temperature}
          {TEMPERATURE_UNITS_FOR_UI[units.temperature_unit]}
        </li>
        <li>
          <FaWind />
          {windSpeed} {WIND_UNITS_FOR_UI[units.wind_speed_unit]}
        </li>
        <li>
          <WindDirectionIcon windDirection={windDirection} />
          {windDirection}°
        </li>
      </ul>
    </article>
  );
}

export default CurrentWeather;
