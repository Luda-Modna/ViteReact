const TableHead = ({ weekDaysNames }) => {
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
