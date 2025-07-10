import React, { useContext } from 'react';
import { WeatherContext } from './../../contexts/index';

function TemperatureUnit () {
  const {
    onTemperatureUnitChange,
    units,
    UNITS: { CELSIUS, FAHRENHEIT },
  } = useContext(WeatherContext);

  return (
    <>
      <label>
        <span>Temperature unit:</span>
        <div>
          <select
            value={units.temperature_unit}
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
