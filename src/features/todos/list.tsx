import { Todo } from "./todo";
import type { TodoListProps } from "./types";

export function TodoList({ title, todos }: TodoListProps) {
  return todos.length < 1 ? null : (
    <div className="grid gap-2">
      <h3 className="font-semibold px-3 text-xl">{title}</h3>

      <div className="grid gap-2">
        {todos.map((todo, index) => (
          <div key={`${todo.name}-${index}`} className="bg-goal-gray-300 p-3">
            <Todo {...todo} />
          </div>
        ))}
      </div>
    </div>
  );
}
