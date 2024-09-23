import { ProgressStatus } from "features/progress";
import { TodoList } from "features/todos/list";

export function Home() {
  return (
    <div className="grid gap-6 pt-4">
      <ProgressStatus />

      <TodoList
        title="To Do"
        todos={[
          {
            title: "Get Groceries for Dinner",
            completed: false,
            dueDate: new Date(),
          },
          {
            title: "Meeting with Charlie",
            completed: false,
            dueDate: new Date(),
          },
        ]}
      />
      <TodoList
        title="Done"
        todos={[
          {
            title: "Run 30 mins",
            completed: true,
            dueDate: new Date(),
          },
          {
            title: "Clean up House",
            completed: true,
            dueDate: new Date(),
          },
        ]}
      />
    </div>
  );
}
