const getTheTitles = function (bookArr) {
  let titleArr = [];
  bookArr.forEach((book) => {
    titleArr.push(book["title"]);
  });
  return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
