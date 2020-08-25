/**
 * NOTE:
 * 배열을 순회하며 각 요소에 대하여 인수로 전달된 콜백 함수를 실행하여
 * 그 결과가 참인 첫번째 요소를 반환한다.
 * 참인 요소가 존재하지 않는다면 undefined를 반환한다.
 */

const users = [
  { id: 1, name: "Lee" },
  { id: 2, name: "Kim" },
  { id: 2, name: "Choi" },
  { id: 3, name: "Park" },
];

// id가 2인 요소를 반환한다.
const result = users.find((item) => item.id === 2);

// Array#find는 배열이 아니라 요소를 반환한다.
console.log(result); // {id: 2, name: 'Kim'}

/**
 * REMIND:
 * filter: 콜백 함수의 실행 결과가 true인 요소만을 추출한 새로운 '배열'을 반환한다.
 * find: 콜백 함수를 실행하여 그 결과가 참인 첫번째 요소를 반환하므로 find의 결과값은 해당 요소값이다.
 */

// Array#filter는 배열을 반환한다.
[1, 2, 2, 3].filter((item) => item === 2); // -> [2, 2]

// Array#find는 요소를 반환한다.
[1, 2, 2, 3].find((item) => item === 2); // -> 2
