import { Calendar } from "@mantine/dates";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export function GoalCalendar() {
  return (
    <div className="h-[calc(100dvh-12rem)] [&>div]:h-full pt-3">
      <Calendar
        classNames={{
          month: "w-full h-full",
          calendarHeader: "!max-w-[unset]",
          monthCell: "border",
          levelsGroup: "h-full [&>div]:h-full [&>div]:w-full",
          day: "!h-full !w-full",
          calendarHeaderLevel: "!text-[1.75rem] !font-bold",
          monthsList: "w-full h-full",
          yearsList: "w-full h-full",
          monthsListCell: "border",
          yearsListCell: "border",
          monthsListControl: "!h-full !w-full",
          yearsListControl: "!h-full !w-full",
        }}
        nextIcon={<IconChevronRight size={48} />}
        previousIcon={<IconChevronLeft size={48} />}
        withCellSpacing={false}
        renderDay={(date) => (
          <div className="flex flex-col h-full w-full p-2">
            <span>{date.getDate()}</span>
          </div>
        )}
      />
    </div>
  );
}
