import { format, formatISO, isToday, isTomorrow, isYesterday } from "date-fns";

export const uniformDateFormat = (
  date: Date | string | undefined | null,
  _format = "yyyy-MM-dd",
) => {
  if (!date) return "";

  return format(date, _format);
};

export function calendarHeaderDate(date: Date): string {
  if (isToday(date)) {
    return "Today";
  }
  if (isYesterday(date)) {
    return "Yesterday";
  }
  if (isTomorrow(date)) {
    return "Tomorrow";
  }
  // Format as "Month Day" if none of the above
  return format(date, "MMMM d");
}

export const uniformDateReveral = (date: Date | string | undefined | null) => {
  if (!date) return new Date();

  return new Date(formatISO(date));
};
