import React, { useContext } from "react";
import { WeatherContext } from "./../../contexts/index";

function WindUnit() {
  const {
    onWindSpeedUnitChange,
    units,
    UNITS: { KM_H, MS },
  } = useContext(WeatherContext);

  return (
    <label>
      <span>Wind speed unit:</span>
      <div>
        <select
          value={units. wind_speed_unit}
          onChange={({ target: { value } }) => onWindSpeedUnitChange(value)}
        >
          <option value={KM_H}>km/h</option>
          <option value={MS}>m/s</option>
        </select>
      </div>
    </label>
  );
}

export default WindUnit;
