const caesarCipher = require('./caesar_cipher');

test("hello with shift 1", () => {
  expect(caesarCipher("hello", 1)).toEqual("ifmmp");
});

test("hello with shift 13", () => {
  expect(caesarCipher("hello", 13)).toEqual("uryyb");
});

test("Hello with shift 20", () => {
  expect(caesarCipher("Hello", 20)).toEqual("Byffi");
});

test("punctuation", () => {
  expect(caesarCipher("Hello! He said.", 5)).toEqual("Mjqqt! Mj xfni.");
});
