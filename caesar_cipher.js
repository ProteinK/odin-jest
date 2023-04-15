const caesarCipher = (str, shift) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let shiftedCharCode = charCode + shift;

    if (charCode >= 65 && charCode <= 90) {
      // uppercase characters
      if (shiftedCharCode > 90) {
        shiftedCharCode = 64 + shiftedCharCode % 90;
      }
    } else if (charCode >= 97 && charCode <= 122) {
      // lowercase characters
      if (shiftedCharCode > 122) {
        shiftedCharCode = 96 + shiftedCharCode % 122;
      }
    } else {
      // everything else like punctuation
      shiftedCharCode = charCode;
    }

    let char = String.fromCharCode(shiftedCharCode);
    result += char;
  }

  return result;
};

module.exports = caesarCipher;
