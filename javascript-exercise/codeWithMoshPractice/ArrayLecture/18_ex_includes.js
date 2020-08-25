//includes 효과를 내는 함수 구성하기

const numbers = [1, 2, 3, 4];

console.log(numbers.includes(5));

//for문 이용
function forIncludes(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
}
console.log(forIncludes(numbers, 5));

//for...of 이용
function forOfIncludes(array, searchElement) {
  for (let element of array) {
    if (searchElement === element) {
      return true;
    }
    return false;
  }
}

console.log(forOfIncludes(numbers, 5));

//filter 이용
function filterIncludes(array, searchElement) {
  return !!array.find((element) => {
    return element === searchElement;
  });
}
console.log(filterIncludes(numbers, 5));

//some 이용
function someIncludes(array, searchElement) {
  return array.some((element) => {
    return element === searchElement;
  });
}
console.log(someIncludes(numbers, 1));
