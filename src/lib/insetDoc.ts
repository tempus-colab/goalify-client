export function createInsertion<T extends object>(doc: T) {
  return {
    ...doc,
    id: crypto.randomUUID(),
    created_at: Date.now(),
    updated_at: Date.now(),
  };
}

export function createUpdate<T extends object>(doc: T) {
  return {
    ...doc,
    updated_at: Date.now(),
  };
}
