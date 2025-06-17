import { format } from "date-fns";
import styles from "./Calendar.module.sass";


const CurrentDate = ({ date }) => {
  const currentWeekDay = format(date, "EEEE");
  const currentDay = format(date, "dd");

  return (
    <><div className={styles.currentDate}></div>
      <h2 className={styles.weekday}>{currentWeekDay}</h2>
      <h2 className={styles.day}>{currentDay}</h2>
    </>
  );
};

export default CurrentDate;
