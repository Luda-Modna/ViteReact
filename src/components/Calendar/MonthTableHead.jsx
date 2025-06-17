import { addDays, startOfWeek, format } from "date-fns";

const TableHead = () => {
  const weekDaysNames = [];

  for (let i = 0; i < 7; i++) {
    const currentDay = addDays(startOfWeek(new Date()), i);
    weekDaysNames.push(format(currentDay, "EEEEE"));
  }
  
  return (
    <>
      <thead>
        <tr>
          {weekDaysNames.map((dayName, i) => (
            <th key={i}>{dayName}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
