import {
  addDays,
  addWeeks,
  formatDate,
  isSameDay,
  startOfWeek,
  subWeeks,
} from "date-fns";
import { cn } from "lib/cn";
import { calendarHeaderDate } from "lib/formatters";
import { useEffect, useState } from "react";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export const ScrollableCalendar = ({
  currentDate,
  setCurrentDate,
}: {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  const [weekDays, setWeekDays] = useState<Date[]>([]);

  // Calculate the week starting from Sunday
  useEffect(() => {
    const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 0 }); // Start week on Sunday
    const daysArray = Array.from({ length: 7 }, (_, i) =>
      addDays(startOfCurrentWeek, i),
    );
    setWeekDays(daysArray);
  }, [currentDate]);

  // Handlers for navigating between weeks
  const handleNextWeek = () => {
    setCurrentDate((prevDate) => addWeeks(prevDate, 1));
  };

  const handlePreviousWeek = () => {
    setCurrentDate((prevDate) => subWeeks(prevDate, 1));
  };

  return (
    <div className="border-b border-black px-2">
      <div className="flex items-center justify-between pb-4">
        <button type="button" onClick={handlePreviousWeek}>
          <IconChevronLeft size={32} color="#B0B0B0" />
        </button>
        <h4 className="font-semibold text-[28px]">
          {calendarHeaderDate(currentDate)}
        </h4>
        <button type="button" onClick={handleNextWeek}>
          <IconChevronRight size={32} color="#B0B0B0" />
        </button>
      </div>
      <div className="flex *:flex-1 items-center justify-center">
        {weekDays.map((day) => (
          <button
            type="button"
            onClick={() => {
              setCurrentDate(day);
            }}
            key={day.toISOString()}
            className={cn(
              "flex flex-col pb-4 items-center text-center justify-center gap-1 relative",

              isSameDay(day, currentDate) &&
                "before:absolute before:bottom-0 before:h-1 before:bg-[#0060C6] before:w-full",
            )}>
            <span className="text-xs">{formatDate(day, "EE")}</span>
            <span className="text-2xl font-bold">{formatDate(day, "dd")}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
