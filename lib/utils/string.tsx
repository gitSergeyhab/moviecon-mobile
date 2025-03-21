export const cutString = (str: string, length = 32): string => {
  return str.length > length ? `${str.slice(0, length - 3)}...` : str;
};
