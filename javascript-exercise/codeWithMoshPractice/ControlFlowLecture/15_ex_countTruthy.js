/* list of falsy value
falsy
undefined
null
''
false
0
NaN
*/

const array = [0, null, undefined, 1, 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
  let result = 0;
  for (let value of array) {
    if (value) {
      result++;
    }
  }
  return result;
}
