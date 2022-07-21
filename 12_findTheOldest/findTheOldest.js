const findTheOldest = function (arr) {
  //no death date

  arr.map(function (person) {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    } else {
      return true;
    }
  });

  const oldestSorting = arr.sort((a, b) => {
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });
  return oldestSorting[0];
};

// Do not edit below this line
module.exports = findTheOldest;
