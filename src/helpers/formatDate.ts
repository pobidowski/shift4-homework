export const formatDate = (
  date: Date,
  format: "full" | "month" | "year" = "full",
) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  if (format === "month") {
    return month;
  }

  if (format === "year") {
    return year;
  }

  return `${month} ${year}`;
};
