/** map은 배열을 순회하며 배열의 각 요소에 대하여 인수로 전달된 콜백 함수를 실행한다.
 * 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.
 * 이때 원본 배열은 변경되지 않는다.
 */

const numbers = [1, 4, 9];

// 배열 순회, 배열의 각 요소에 대해 인수로 전달된 콜백 함수 실행
const roots = numbers.map((item) => Math.sqrt(item));

// 콜백 함수의 반환값들로 구성된 '새로운 배열' 반환
console.log(roots);
// REMIND:원본 배열은 변경되지 않는다.
console.log(numbers);

/**
 * NOTE:
 * forEach: 배열을 순회하며 요소 값을 참조하여 무언가를 하기 위한 함수
 * map: 배열을 순회하며 요소 값을 다른 값으로 매핑하기 위한 함수
 * REMIND:
 * map 메소드가 생성하여 반환하는 새로운 배열의 length는
 * map 메소드를 호출한 배열, 즉 this의 length와 반드시 일치한다.(1:1 매핑(mapping))
 */

// map 메소드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].map((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${arr}`);
  return item;
});
