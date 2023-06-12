const analyzeArray = require('./analyze_array');

test("returns length", () => {
  expect(analyzeArray([1, 2, 3])).toHaveProperty("length", 3);
  expect(analyzeArray([])).toHaveProperty("length", 0);
});

test("returns average", () => {
  expect(analyzeArray([4, 6, 5, 5])).toHaveProperty("average", 5);
  expect(analyzeArray([1, 2, 3])).toHaveProperty("average", 2);
  expect(analyzeArray([4, 5])).toHaveProperty("average", 4.5);
});

test("returns min", () => {
  expect(analyzeArray([3, 2, 1])).toHaveProperty("min", 1);
  expect(analyzeArray([0, 1, -5])).toHaveProperty("min", -5);
});

test("returns max", () => {
  expect(analyzeArray([3, 2, 1])).toHaveProperty("max", 3);
  expect(analyzeArray([0, 1, -5])).toHaveProperty("max", 1);
});
