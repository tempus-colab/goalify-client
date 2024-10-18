import { uniformDateFormat } from "lib/formatters";
import { createInsertion } from "lib/insetDoc";
import { useRxCollection } from "rxdb-hooks";

import type { ITodo } from "../types";

export function useCreateGoal() {
  const goalCollection = useRxCollection("goals");

  return async (
    data: Omit<ITodo, "id" | "created_at" | "completed" | "updated_at">,
  ) => {
    await goalCollection?.insert(
      createInsertion({ ...data, dueDate: uniformDateFormat(data.dueDate) }),
    );
  };
}
