import { uniformDateFormat } from "lib/formatters";
import { createUpdate } from "lib/insetDoc";
import { useRxCollection } from "rxdb-hooks";

import type { ITodo } from "../types";

export function useUpdateGoal(id: string) {
  const goalCollection = useRxCollection("goals");

  return async (data: Partial<ITodo>) => {
    await goalCollection?.upsert({
      id,
      ...createUpdate(data),
      dueDate: uniformDateFormat(data.dueDate),
      updatedAt: uniformDateFormat(new Date()),
    });
  };
}
