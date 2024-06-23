const findTheOldest = function (personsArr) {
  let ageArr = personsArr.map((person) => {
    if ("yearOfDeath" in person) {
      return person["yearOfDeath"] - person["yearOfBirth"];
    } else {
      let currYear = new Date().getFullYear();
      return +currYear - person["yearOfBirth"];
    }
  });
  let sortedArr = ageArr.toSorted((a, b) => a - b);
  let maxAge = sortedArr.reverse()[0];
  let index = ageArr.indexOf(maxAge);
  return personsArr.at(index);
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

// Do not edit below this line
module.exports = findTheOldest;
