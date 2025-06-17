import CurrentDate from "./CurrentDate";
import Month from "./Month";
import styles from "./Calendar.module.sass";

const Calendar = () => {
  const date = new Date();
  return (
    <>
      <div className={styles.calendarContainer}>
        <div className={styles.currentDate}>
          <CurrentDate date={date} />
        </div>
        <Month />
      </div>
    </>
  );
};

export default Calendar;
