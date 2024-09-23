import type { ReactNode } from "react";

import { Todo } from "./todo";

interface TodoListProps {
  title: ReactNode;
  todos: Array<ITodo>;
}

interface ITodo {
  title: string;
  completed: boolean;
  dueDate: Date;
}

export function TodoList({ title, todos }: TodoListProps) {
  return (
    <div className="grid gap-2">
      <h3 className="font-semibold px-3 text-xl">{title}</h3>

      <div className="grid gap-2">
        {todos.map((todo, index) => (
          <div key={`${todo.title}-${index}`} className="bg-goal-gray-300 p-3">
            <Todo
              defaultChecked={todo.completed}
              title={todo.title}
              dueDate={todo.dueDate}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
