const capitalize = require('./capitalize');

test("capitalizes first word", () => {
  expect(capitalize("something")).toEqual("Something");
});
