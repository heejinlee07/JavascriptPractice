//콜백함수

//전달받은 인수를 그대로 출력하는 중첩 함수
function logAll(num) {
  console.log(num);
}
//전달받은 인수가 홀수일 때만 출력하는 중첩 함수
function logOdd(num) {
  if (num % 2) console.log(num);
}
//전달받은 인수가 짝수일 때만 출력하는 중첩 함수
function logEven(num) {
  if (num % 2 === 0) console.log(num);
}

function repeat(n, fn) {
  for (var i = 0; i < n; i++) {
    fn(i);
  }
}

repeat(5, logAll);
repeat(5, logOdd);
repeat(5, logEven);

//간단히 하면?
function repeat(n, fn) {
  for (var i = 0; i < n; i++) {
    fn(i);
  }
}

repeat(5, function(n) {
  console.log(n);
});

// 0~99까지 10의 배수를 출력
repeat(100, function(n) {
  if (n % 10 === 0) console.log(n);
});
