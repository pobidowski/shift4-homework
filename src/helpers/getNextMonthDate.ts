export const getNextMonthDate = (date: Date = new Date()) => {
  let nextMonth = date.getMonth() + 1;
  let year = date.getFullYear();

  if (date.getMonth() == 11) {
    nextMonth = 0;
    year += 1;
  }

  return new Date(year, nextMonth, 1);
};
