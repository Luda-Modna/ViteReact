import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';

function TemperatureIcon ({ temperature }) {
  return temperature > 0 ? <FaTemperatureHigh /> : <FaTemperatureLow />;
}

export default TemperatureIcon;
