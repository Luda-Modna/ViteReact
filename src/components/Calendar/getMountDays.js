import {
  format,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  getWeek,
  getYear,
  addDays,
  parse,
  getMonth,
} from "date-fns";

function getMonthDays(date) {
  const caption = format(date, "LLLL yyyy");

  const startWeek = getWeek(startOfMonth(date));
  const endWeek = getWeek(endOfMonth(date));

  const weekDaysNames = [];
  const weekStart = startOfWeek(new Date());
  for (let i = 0; i < 7; i++) {
    const currentDay = addDays(weekStart, i);
    weekDaysNames.push(format(currentDay, "EEEEE"));
  }

  const monthDays = [];
  for (let i = startWeek; i <= endWeek; i++) {
    const weekDays = [];
    let startWeekDay = startOfWeek(
      parse(`${i}`, "w", new Date(getYear(date), 0, 1))
    );

    for (let j = 0; j < 7; j++) {
      const currentDay = addDays(startWeekDay, j);
      if (getMonth(currentDay) === getMonth(date)) {
        weekDays.push(currentDay);
      } else {
        weekDays.push(null);
      }
    }
    monthDays.push(weekDays);
  }

  return { caption, weekDaysNames, monthDays };
}

export default getMonthDays;
