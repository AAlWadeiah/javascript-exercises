const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (num == 0) return 0;
  if (num == 1) return 1;

  let result = 1;
  let prev = 1;
  for (let i = 2; i < +num; i++) {
    let temp = result;
    result += prev;
    prev = temp;
  }
  return result;
};
// Do not edit below this line
module.exports = fibonacci;
