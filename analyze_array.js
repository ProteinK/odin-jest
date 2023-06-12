const analyzeArray = (arr) => {
  const length = arr.length;
  const sum = arr.reduce((sum, n) => sum + n, 0);
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { length, average, min, max };
};

module.exports = analyzeArray;
