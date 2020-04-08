/*for (var i = 0; i < 5; i++) {
  console.log(i);
}

function repeat(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

repeat(10);

function repeat2(n) {
  for (var i = 0; i < n; i++) {
    if (i % 2) console.log(i);
  }
}

function repeat3(n) {
  for (var i = 0; i < n; i++) {
    if (i % 2 === 0) console.log(i);
  }
}

repeat(5);
repeat2(5);
repeat3(5);
*/

//중첩함수
//잘못된 케이스

//케이스 정의
var all = 1;
var odd = 2;
var even = 3;

function repeat(n, type) {
  for (var i = 0; i < n; i++) {
    //경우에 따라 중첩 함수를 호출
    if (type === all) logAll(i);
    else if (type === odd) logOdd(i);
    else if (type === even) logEven(i);
    else throw new Error("Error!");
  }
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
}

repeat(5, all);
repeat(5, odd);
repeat(5, even);
