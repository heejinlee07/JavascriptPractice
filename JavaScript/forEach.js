const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(i);
}

//arr.forEach((요소값,인덱스,arr) => {}); //콜백함수를 forEach가 호출. 배열을 순회하면서 호출.
arr.forEach((v, i, arr) => {
  console.log(v, i, arr);
});

//제곱 만들기
const pows = [];

arr.forEach((v, i) => {
  pows[i] = v ** 2;
});

console.log(pows);

//for문을 쓰는 환경에서는 for문 대신 forEach를 쓰는 것이 권장됨. for문 보다 느리지만 가독성이 더 좋음.
//알고리즘 풀 때는 for문, 현업에서는 forEach

[1, 2, 3].forEach(console.log);
[1, 2, 3].forEach(function(v, i, arr) {
  console.log(v, i, arr);
}); //위의 [1, 2, 3].forEach(console.log);과 동일함.

//console.log(Math.pow(2, 2)); // 2 ** 2
