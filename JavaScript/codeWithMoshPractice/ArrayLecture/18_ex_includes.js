const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 5));

function includes(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
}
