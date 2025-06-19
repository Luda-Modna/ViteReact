import React from "react";

function CurrentWeather({ weather, units }) {
  const { temperature, windSpeed, windDirection } = weather;
  const { temperatureUnit, windSpeedUnit, windDirectionUnit } = units;

  return (
    <>
      <h2>Current Weather</h2>
      <p>
        {temperature} {temperatureUnit}
      </p>
      <p>
        {windSpeed} {windSpeedUnit}
      </p>
      <p>
        {windDirection} {windDirectionUnit}
      </p>
    </>
  );
}

export default CurrentWeather;
