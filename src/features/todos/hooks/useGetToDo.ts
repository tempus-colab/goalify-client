import { uniformDateFormat } from "lib/formatters";
import { useRxData } from "rxdb-hooks";

import type { ITodo } from "../types";

export function useGetToDo(date = new Date()) {
  const formattedDate = uniformDateFormat(date);

  return useRxData<ITodo>("goals", (collection) =>
    collection.find({
      selector: {
        dueDate: {
          $eq: formattedDate,
        },
        completed: {
          $eq: false,
        },
      },
    }),
  );
}
