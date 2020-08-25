// var x = 1;
// x += 1;
// console.log(); //1
// console.log(x); //2

//아래 if문을 삼항조건연산자로 써보기
var num = 2;
var kind = "";

if (num > 0) {
  kind = "양수";
} else {
  kind = "음수"; // 0은 음수가 아니다.
}
console.log(kind); // 양수

//정답
// var num = 2;
// var kind = '';

// kind = num > 0 ? '양수' : '음수';

var num = 0;
var kind = "";

//kind = num > 0 ? "양수" : num < 0 ? "음수" : "영";
kind = num ? (num > 0 ? "양수" : "음수") : "영";
//내가 해본 구문
var num = 1;
var result = num - 0 ? "양수" : "음수";
console.log(result);

//for문 - l의 개수 세기
var str = "hello world!";
var cnt = 0;

for (var i = 0; i < str.length; i++) {
  if (str[i] === "l") cnt++;
}

console.log(cnt);
//str.length;
//str[0];
