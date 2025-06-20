import React from "react";
import { WeatherContext } from "./../../contexts/index";


function WindUnit() {
  return (
    <WeatherContext.Consumer>
      {(context) => {
        return (
          <label>
            <span>Wind speed unit:</span>
            <div>
              <select
                value={context.isSelectKmH ? "kmH" : "mS"}
                onChange={({ target: { value } }) =>
                  context.onWindSpeedUnitChange(value)
                }
              >
                <option value="kmH">km/h</option>
                <option value="mS">m/s</option>
              </select>
            </div>
          </label>
        );
      }}
    </WeatherContext.Consumer>
  );
}

export default WindUnit;
