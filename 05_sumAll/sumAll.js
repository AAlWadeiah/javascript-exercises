const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0
  )
    return "ERROR";
  try {
    let sum = 0;
    let start = num1 < num2 ? num1 : num2;
    let end = num1 > num2 ? num1 : num2;
    for (i = start; i <= end; i++) sum += i;
    return sum;
  } catch (error) {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
