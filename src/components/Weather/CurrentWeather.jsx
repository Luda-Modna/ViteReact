import React from "react";
import { FaWind } from "react-icons/fa";
import TemperatureIcon from "./TemperatureIcon";
import WindDirectionIcon from "./WindDirectionIcon";
import styles from './Weather.module.sass'

function CurrentWeather({ weather, units }) {
  const { temperature, windSpeed, windDirection } = weather;
  const { temperatureUnit, windSpeedUnit, windDirectionUnit } = units;

  return (
    <article className={styles.currentWeatherContainer}>
      <h2>Current Weather</h2>
      <ul>
        <li>
          <TemperatureIcon temperature={temperature} />
          {temperature} {temperatureUnit}
        </li>
        <li>
          <FaWind />
          {windSpeed} {windSpeedUnit}
        </li>
        <li>
          <WindDirectionIcon windDirection={windDirection} />
          {windDirection} {windDirectionUnit}
        </li>
      </ul>
    </article>
  );
}

export default CurrentWeather;
