//How to filter an array based on a search criteria.

const numbers = [1, -1, 2, 3];

//three parameter -> value, index, array. it can only add ones.
const filtered = numbers.filter(function(value) {
  return value >= 0;
});

/*
if the element matches this criteria, 
it will add this element to new array here.
*/
console.log(filtered); //[1,2,3]

//use arrow function

const numbers2 = [1, -1, 2, 3];

//it can be abbreviation like v for value, or n for number.
//like this (n => n>=0);
//because it's obvious that we're working with thr numbers array.
const filteredArrow = numbers2.filter(value => value >= 0);
console.log(filteredArrow);
