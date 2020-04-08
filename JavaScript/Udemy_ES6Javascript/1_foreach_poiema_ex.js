// foreach는 배열을 순회하며 배열의 각 요소에 대해
// 인수로 전달될 콜백함수를 실행한다.

//원본배열과 원본배열을 foreach로 순회하여 반환할 새로운
//배열을 저장할 빈 배열을 만든다. 이를 pows라는 변수에 담아둔다.
const numbers = [1, 2, 3];
let pows = [];

//for문으로 순회할 경우 복잡하다.
//for문으로 순회하면서 각각의 요소를 제곱한 결과를
//빈 배열에 push하여 담는다.

for (let i = 0; i < numbers.length; i++) {
  pows.push(numbers[i] ** 2);
}

console.log(pows);

//위의 for문을 foreach로 순회할 경우 더욱 간단하게 표현할 수 있다.

//this를 전달받을 수 있다.
numbers.forEach((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${arr}`);
});

//foreach메소드는 원본 배열을 변경하지 않는다.
//그러나 콜백함수의 3번째 인자를 사용하면 변경할 수 있다.

numbers.forEach((item, index, arr) => {
  arr[index] = item ** 3;
});
console.log(numbers);
