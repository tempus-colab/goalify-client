import { useRxCollection } from "rxdb-hooks";

export function useDeleteGoal() {
  const goalCollection = useRxCollection("goals");

  return (id: string) => goalCollection?.bulkRemove([id]);
}
