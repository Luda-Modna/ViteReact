import React from "react";
import WindUnit from "./WindUnit.jsx";
import TemperatureUnit from "./TemperatureUnit.jsx";

function WeatherUnit() {
  return (
    <article>
      <WindUnit />
      <TemperatureUnit />
    </article>
  );
}

export default WeatherUnit;
