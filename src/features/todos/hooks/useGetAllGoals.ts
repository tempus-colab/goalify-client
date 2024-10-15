import { useRxData } from "rxdb-hooks";

import type { ITodo } from "../types";

export function useGetAllGoals() {
  return useRxData<ITodo>("goals", (collection) => collection.find({}));
}
