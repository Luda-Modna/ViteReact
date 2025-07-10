import React from 'react';
import { isSameDay, getDate } from 'date-fns';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Calendar.module.sass';

const MonthWeekDay = ({ day, today }) => {
  return (
    <td
      className={classNames({
        [styles.today]: day && isSameDay(day, today),
        [styles.justDay]: !isSameDay(day, today),
      })}
    >
      {day ? getDate(day) : ''}
    </td>
  );
};

MonthWeekDay.propTypes = {
  day: PropTypes.instanceOf(Date),
  today: PropTypes.instanceOf(Date).isRequired,
};

export default MonthWeekDay;
