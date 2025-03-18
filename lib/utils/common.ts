export const checkValueExist = <T>(value: T) =>
  value !== undefined && value !== null;

export const getRandomItem = <T>(values: T[]): T => {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};
