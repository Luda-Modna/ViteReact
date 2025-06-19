import React from "react";
import WindUnit from "./WindUnit.jsx";
import TemperatureUnit from "./TemperatureUnit.jsx";

function WeatherUnit() {
  return (
    <>
      {" "}
      <WindUnit />
      <TemperatureUnit />
    </>
  );
}

export default WeatherUnit;
