function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers([1, 2, 3, 4, 5]));

//arrray 대신 multiple arguments를 전달하고 싶다면
//이렇게 arguments를 전달해도 되지만 지저분하다.
//이때 rest operator 사용
function addNumbers2(a, b, c, d, e) {
  const numbers = [a, b, c, d, e];

  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers2(1, 2, 3, 4, 5));

/**
 * NOTE:rest operator
 * to capture all of those arguments and put them into a single array.
 * So this array of numbers that is the purpose of this dot dot dot right here
 * is what we refer to as the rest operator.
 */

function addNumbers3(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers3(1, 2, 3, 4, 5));
