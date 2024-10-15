import type { ReactNode } from "react";

export interface TodoListProps {
  title: ReactNode;
  todos: Array<ITodo>;
}

export interface ITodo {
  id: string;
  completed: boolean;
  dueDate: Date | null;
  description: string;
  name: string;
  time: string;
  reminder: string;
  duration: string;
  created_at: number;
  updated_at: number;
}
