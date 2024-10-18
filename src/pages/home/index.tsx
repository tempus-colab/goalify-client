import { ProgressStatus } from "features/progress";
import { ScrollableCalendar } from "features/scrollable-calendar";
import { EmptyState } from "features/todos/empty";
import { useGetCompleted, useGetNotCompleted } from "features/todos/hooks";
import { TodoList } from "features/todos/list";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function Home() {
  const [searchParams] = useSearchParams();

  const [currentDate, setCurrentDate] = useState(
    new Date(searchParams.get("date") ?? Date.now()),
  );

  const { result: completed } = useGetCompleted(currentDate);
  const { result: toDo } = useGetNotCompleted(currentDate);

  const isEmpty = completed.length === 0 && toDo.length === 0;

  return (
    <div className="grid gap-6 pt-4">
      <ScrollableCalendar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />

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
