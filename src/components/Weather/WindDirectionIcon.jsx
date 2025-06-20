import {
  BsArrowUp,
  BsArrowUpRight,
  BsArrowRight,
  BsArrowDownRight,
  BsArrowDown,
  BsArrowDownLeft,
  BsArrowLeft,
  BsArrowUpLeft,
} from "react-icons/bs";

function WindDirectionIcon({ windDirection }) {
  let Icon = BsArrowUp;

  if (windDirection >= 20 && windDirection < 70) {
    Icon = BsArrowUpRight;
  } else if (windDirection >= 70 && windDirection < 120) {
    Icon = BsArrowRight;
  } else if (windDirection >= 120 && windDirection < 160) {
    Icon = BsArrowDownRight;
  } else if (windDirection >= 160 && windDirection < 210) {
    Icon = BsArrowDown;
  } else if (windDirection >= 210 && windDirection < 250) {
    Icon = BsArrowDownLeft;
  } else if (windDirection >= 250 && windDirection < 300) {
    Icon = BsArrowLeft;
  } else if (windDirection >= 300 && windDirection < 340) {
    Icon = BsArrowUpLeft;
  } else {
    Icon = BsArrowUp;
  }

  return <Icon />;
}

export default WindDirectionIcon;
