export const randomSort = <T>(items: T[]) =>
  items.sort(() => Math.random() - 0.5);
