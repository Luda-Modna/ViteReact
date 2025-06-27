import React, { useContext } from "react";
import { WeatherContext } from "./../../contexts/index";


function TemperatureUnit() {
  const { onTemperatureUnitChange, isSelectedCelsius,UNITS: { CELSIUS, FAHRENHEIT },} =
    useContext(WeatherContext);

  return (
    <>
      <label>
        <span>Temperature unit:</span>
        <div>
          <select
            value={isSelectedCelsius ? CELSIUS : FAHRENHEIT}
            onChange={({ target: { value } }) => onTemperatureUnitChange(value)}
          >
            <option value={CELSIUS}>C</option>
            <option value={FAHRENHEIT}>Fh</option>
          </select>
        </div>
      </label>
    </>
  );
}

export default TemperatureUnit;
