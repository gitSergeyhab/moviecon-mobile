const getColsNumber = (resultsCount: number) => {
  if (resultsCount <= 3) {
    return 1;
  }
  if (resultsCount <= 5) {
    return 2;
  }

  if (resultsCount <= 10) {
    return 3;
  }
  if (resultsCount <= 16) {
    return 4;
  }

  return Math.round(resultsCount ** 0.5);
};

const getName = (item: number[]) => {
  if (item.length === 0) {
    return "-";
  }
  if (item.length === 1) {
    return item.toString();
  }
  return `${item[0]}-${item[item.length - 1]}`;
};

export const getData = (
  rawData: number[],
  cols = getColsNumber(rawData.length)
) => {
  const max = Math.max(...rawData);
  const firstDigit = max.toString().charAt(0);
  const rest = max.toString().slice(1);
  const resultString = (Number(firstDigit) + 1).toString() + rest;
  const result = Number(resultString);
  const step = result / cols;

  const arr: number[][] = [[]];
  let stepI = step;

  rawData.forEach((item) => {
    if (item < stepI) {
      const last = arr[arr.length - 1];
      last.push(item);
    } else {
      stepI += step;
      arr.push([item]);
    }
  });

  const resultArr = arr.map((item) => {
    const resultName = getName(item);
    const count = item.length;
    return { resultName, count };
  });

  return resultArr;
};
