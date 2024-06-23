const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArr) {
  return numArr.reduce((total, num) => (total += num), 0);
};

const multiply = function (numArr) {
  return numArr.reduce((total, num) => (total *= num), 1);
};

const power = function (base, pow) {
  return base ** pow;
};

const factorial = function (num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
