const numbers = [1, -1, 2, 3];

let sum1 = 0;
for (let n of numbers) sum1 += n;
console.log(sum1);

/*
using reduce method -> with this method reduce all these
elements in an array into a single value.
*/

//this method takes a callback function with two parameters.
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum2);

//initial value를 지정하지 않으면 array의 첫 번째 element가 initial value가 된다.
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum3 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum3);

/* this method has two arguments, first is a callback function.
second is the initial value for the accumulator.
*/
