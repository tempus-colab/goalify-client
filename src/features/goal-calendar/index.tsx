import { format } from "date-fns";
import { useGetAllGoals } from "features/todos/hooks";
import { uniformDateFormat } from "lib/formatters";
import { useMemo, useRef } from "react";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export function GoalCalendar() {
  const calendarRef = useRef<FullCalendar | null>(null);

  function goNext() {
    const calendarApi = calendarRef?.current?.getApi();
    calendarApi?.next();
  }

  function goPrev() {
    const calendarApi = calendarRef?.current?.getApi();
    calendarApi?.prev();
  }

  const currentDate = useMemo(
    () =>
      format(
        calendarRef.current?.getApi().getDate() ?? new Date(),
        "MMMM yyyy",
      ),
    [],
  );

  const { result } = useGetAllGoals();

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 mb-6">
        <button type="button" onClick={goPrev}>
          <IconChevronLeft color="#B0B0B0" size={32} />
        </button>
        <h4 className="text-2xl font-medium" key={currentDate}>
          {currentDate}
        </h4>
        <button type="button" onClick={goNext}>
          <IconChevronRight color="#B0B0B0" size={32} />
        </button>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        initialDate={new Date()}
        headerToolbar={false}
        dateClick={(arg) => console.log(arg)}
        dayHeaderContent={(val) => (
          <span className="text-sm font-medium">
            {val.text.substring(0, 1)}
          </span>
        )}
        dayHeaderClassNames={() => "!border-x-0 !border-t-0"}
        contentHeight="72dvh"
        events={result.map((event) => ({
          allDay: true,
          date: uniformDateFormat(event.dueDate),
          backgroundColor: event.completed ? "#006812" : "white",
          borderColor: event.completed ? "" : "#006812",
          textColor: event.completed ? "white" : "#006812",
          title: event.name,
          className: "text-[10px] rounded-lg px-1 !py-0 mx-0",
        }))}
        eventClassNames={(arg) => {
          if (arg.isPast) {
            return ["opacity-20 bg-red-400"];
          }
          return [""];
        }}
      />
    </div>
  );
}
