const Calculator = require("./calculator");

test("addition", () => {
  expect(Calculator.add(5, 7)).toEqual(12);
});

test("subtraction", () => {
  expect(Calculator.subtract(5, 7)).toEqual(-2);
});

test("subtraction order", () => {
  expect(Calculator.subtract(7, 5)).toEqual(2);
});

test("multiplication", () => {
  expect(Calculator.multiply(5, 7)).toEqual(35);
});

test("division", () => {
  expect(Calculator.divide(10, 2)).toEqual(5);
});

test("floating point division", () => {
  expect(Calculator.divide(5, 2)).toBeCloseTo(2.5);
});
