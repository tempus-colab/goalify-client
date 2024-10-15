import { ProgressStatus } from "features/progress";
import { EmptyState } from "features/todos/empty";
import { useGetCompleted, useGetNotCompleted } from "features/todos/hooks";
import { TodoList } from "features/todos/list";
import { calendarHeaderDate } from "lib/formatters";
import { useState } from "react";
import ScrollableCalendar from "react-calender-horizontal/lib/ScrollableCalendar";

export function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const { result: completed } = useGetCompleted(currentDate);
  const { result: toDo } = useGetNotCompleted(currentDate);

  const isEmpty = completed.length === 0 && toDo.length === 0;

  return (
    <div className="grid gap-6 pt-4">
      <div className="border-b-2 border-[#e5e7eb] space-y-4">
        <h3 className="text-center text-2xl font-semibold">
          {calendarHeaderDate(currentDate)}
        </h3>
        <ScrollableCalendar
          onDateSelect={setCurrentDate}
          daysInWeek={7}
          canSelectPastDates={true}
          maxWidth="900px"
        />
      </div>

      {isEmpty ? (
        <EmptyState />
      ) : (
        <>
          <ProgressStatus done={completed.length} todo={toDo.length} />
          <TodoList title="To Do" todos={toDo.map((el) => el._data)} />
          <TodoList title="Done" todos={completed.map((el) => el._data)} />
        </>
      )}
    </div>
  );
}
