import React from "react";
import { WeatherContext } from "./../../contexts/index";

function TemperatureUnit() {
  return (
    <WeatherContext.Consumer>
      {(context) => {
        return (
          <>
            <label>
              <span>Temperature unit:</span>
              <div>
                <select
                  value={context.isSelectedCelsius ? "celsius" : "fahrenheit"}
                  onChange={({ target: { value } }) =>
                    context.onTemperatureUnitChange(value)
                  }
                >
                  <option value="celsius">C</option>
                  <option value="fahrenheit">Fh</option>
                </select>
              </div>
            </label>
          </>
        );
      }}
    </WeatherContext.Consumer>
  );
}

export default TemperatureUnit;
