export const getNumberOfMonths = (date: Date) => {
  const today = new Date();
  const months = (date.getFullYear() - today.getFullYear()) * 12;
  return months + (date.getMonth() - today.getMonth());
};
