import PropTypes from "prop-types";
import MonthWeekDay from "./MonthWeekDay";

const MonthWeek = ({ week, today }) => {
  return (
    <tr>
      {week.map((day, i) => (
        <MonthWeekDay key={i} day={day} today={today} />
      ))}
    </tr>
  );
};

MonthWeek.propTypes = {
  week: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  today: PropTypes.instanceOf(Date).isRequired,
};

export default MonthWeek;
