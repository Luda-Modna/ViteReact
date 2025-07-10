const KM_H = 'kmh';
const MS = 'ms';
const CELSIUS = 'celsius';
const FAHRENHEIT = 'fahrenheit';

const WEATHER_UNITS = {
  TEMPERATURE_UNITS: {
    CELSIUS: 'celsius',
    FAHRENHEIT: 'fahrenheit',
  },
  WIND_UNITS: {
    KM_H: 'kmh',
    MS: 'ms',
  },
  TEMPERATURE_UNITS_FOR_UI: {
    [CELSIUS]: '°C',
    [FAHRENHEIT]: '°F',
  },
  WIND_UNITS_FOR_UI: {
    [KM_H]: 'km/h',
    [MS]: 'm/s',
  },
};

export default WEATHER_UNITS;
