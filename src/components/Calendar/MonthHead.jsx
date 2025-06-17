import styles from "./Calendar.module.sass";

const MonthHead = ({ caption }) => <caption className={styles.caption}>{caption}</caption>;

export default MonthHead;
