import { useRxData } from "rxdb-hooks";

import type { ITodo } from "../types";

export function useGetSingleTodo(id: string) {
  return useRxData<ITodo>("goals", (collection) =>
    collection.findOne({ selector: { id } }),
  );
}
