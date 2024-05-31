export const getPreviousMonthDate = (date: Date = new Date()) => {
  let previousMonth = date.getMonth() - 1;
  let year = date.getFullYear();

  if (date.getMonth() == 0) {
    previousMonth = 11;
    year -= 1;
  }

  return new Date(year, previousMonth, 1);
};
