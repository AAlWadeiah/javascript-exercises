const palindromes = function (string) {
  // 0 - 9 (48 - 57) (0x0030 - 0x0039)
  // A - Z (65 - 90) (0x0041 - 0x005A)
  // a - z (97 - 122) (0x0061 - 0x007A)
  let strArr = string
    .toLowerCase()
    .split("")
    .filter((char) => {
      let code = char.charCodeAt(0);
      return (
        !(48 > char.charCodeAt(0) && char.charCodeAt(0) < 57) ||
        !(65 > char.charCodeAt(0) && char.charCodeAt(0) < 90) ||
        !(97 > char.charCodeAt(0) && char.charCodeAt(0) < 122)
      );
    });

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== strArr[strArr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
