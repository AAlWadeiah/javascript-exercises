const removeFromArray = function (arr, ...toRemove) {
  for (const item of toRemove) {
    let i = 0;
    while (i < arr.length) {
      if (item === arr[i]) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
