const findTheOldest = function (arr) {
  //no death date

  const currentYear = new Date().getFullYear();

 let hasDeathYear = arr.hasOwnProperty('yearOfDeath');

 if (hasDeathYear){
    console.log('yes');
 }else{
    console.log('no');
    arr['yearOfDeath'] = currentYear;
 }

  const oldestSorting = arr.sort(function (a, b) {
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });
  console.log(oldestSorting);
  return oldestSorting[0];
};

// Do not edit below this line
module.exports = findTheOldest;
