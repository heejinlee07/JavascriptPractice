const numbers = [1, 2, 3];

//three parameter -> value, index, array. it can only add ones.
const allPositive = numbers.every(function (value) {
  return value >= 0; //return a boolean
});

console.log(allPositive);

const numbers2 = [1, -1, 2, 3];

//three parameter -> value, index, array. it can only add ones.
const allPositive2 = numbers2.every(function (value) {
  return value >= 0; //return a boolean
});

//finds an element that doesn't match this criteria, it's going to stop searching.
console.log(allPositive2);

//some method that checks if we have at least one element in this array.
const numbers3 = [1, -1, 2, 3];

const checkPositive = numbers3.some(function (value) {
  return value >= 0; //return a boolean
});

console.log(checkPositive);

/*
these methods are new in JS, so some older browsers 
do not support this.
*/
