export function unique<T>(...items: T[][]) {
  const set = new Set<T>();

  for (const item of items) {
    for (const value of item) {
      set.add(value);
    }
  }

  return [...set];
}
