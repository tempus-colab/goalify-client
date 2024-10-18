import { constructNow } from "date-fns";

export function createInsertion<T extends object>(doc: T) {
  return {
    ...doc,
    id: crypto.randomUUID(),
    completed: false,
    created_at: constructNow(new Date()).getTime(),
    updated_at: constructNow(new Date()).getTime(),
  };
}

export function createUpdate<T extends object>(doc: T) {
  return {
    ...doc,
    updated_at: constructNow(new Date()).getTime(),
  };
}
