const reverseString = require('./reverse_string');

test("Reverses string", () => {
  expect(reverseString("reversed")).toEqual("desrever");
});
