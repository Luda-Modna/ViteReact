import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

function TemperatureIcon({ temperature }) {
  let Icon = FaTemperatureHigh;

  if (temperature > 0) {
    Icon = FaTemperatureHigh;
  } else {
    Icon = FaTemperatureLow;
  }

  return <Icon />;
}

export default TemperatureIcon;
