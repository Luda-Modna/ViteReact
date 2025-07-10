import PropTypes from 'prop-types';

import getMonthDays from './getMountDays.js';
import MonthHead from './MonthHead';
import MonthTableHead from './MonthTableHead';
import MonthWeek from './MonthWeek';
import styles from './Calendar.module.sass';

const Month = () => {
  const date = new Date();
  const today = new Date();

  const { caption, weekDaysNames, monthDays } = getMonthDays(date);
  return (
    <>
      <div className={styles.tableContainer}>
        <table>
          <MonthHead caption={caption} />
          <MonthTableHead weekDaysNames={weekDaysNames} />
          <tbody>
            {monthDays.map((week, i) => (
              <MonthWeek key={i} week={week} today={today} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

Month.propTypes = {
  caption: PropTypes.string.isRequired,
  weekDaysNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  today: PropTypes.instanceOf(Date).isRequired,
};

export default Month;
