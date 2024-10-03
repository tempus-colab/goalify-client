import { DotsHorizontal } from "icons";
import { cn } from "lib/cn";
import { useNavigate } from "react-router-dom";

import { Checkbox } from "@mantine/core";

import { useUpdateGoal } from "./hooks";
import type { ITodo } from "./types";

export function Todo(todo: ITodo) {
  const markAsCompleted = useUpdateGoal();
  const navigate = useNavigate();

  const handleEditGoal = () => navigate("/goals/:id/edit");

  return (
    <Checkbox
      key={todo.id}
      label={
        <>
          <span>{todo.name}</span>

          <p className="flex items-center gap-1 px-1 decora">
            <span>{todo.time}</span>
            <button type="button" onClick={handleEditGoal}>
              <DotsHorizontal />
            </button>
          </p>
        </>
      }
      size="lg"
      radius="9px"
      color="#001514"
      classNames={{
        label: cn(
          "!text-base !flex justify-between items-center !w-full flex-1 gap-8",
          todo.completed && "opacity-50",
        ),
        labelWrapper: "flex-1",
        body: cn(
          "flex !items-center h-20",
          todo.completed && "line-through",
          todo.completed && "line-through",
        ),
        root: cn(""),
        input: cn("!border-[3px] !border-goal-gray-950"),
      }}
      checked={todo.completed}
      onChange={(event) =>
        markAsCompleted({ ...todo, completed: event.currentTarget.checked })
      }
      right={"Hello"}
    />
  );
}
