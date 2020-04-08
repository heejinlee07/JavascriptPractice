// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
var x = 15;

if (x > 10 || x < 20) {
  console.log(x);
}

// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
let str = "";

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    str += i;
  }
}
console.log(str);

// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (let i = 9; i >= 0; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
let i = 0;

while (i < 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
let i = 9;

while (i >= 0) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i--;
}

// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
let result = 0;

for (let i = 0; i < 10; i++) {
  result += i;
}
console.log(result);

// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
let result = 0;

for (let i = 1; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    result += i;
  }
}
console.log(result);

//9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
let result = 0;

for (let i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    result += i;
  }
}
console.log(result);

// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 6) {
      console.log(`[${i}, ${j}]`);
    }
  }
}

// 11. 삼각형 출력하기 -1
var line = 5;
var star = "";
var result = "";

for (let i = 0; i < line; i++) {
  star += "*";
  result += star + "\n";
}

console.log(result);

var line = 5;
var star = "";
var result = "";

for (let i = 0; i < line; i++) {
  star += "*" + "\n"; //개행문자를 여기다 쓰면 어떻게 될까?
  result += star;
}

console.log(result);

var line = 5;
var result = "";

for (let i = 0; i < line; i++) {
  var star = "*".repeat(i + 1);
  result += star + "\n";
}

console.log(result);

// 12. 삼각형 출력하기 -2
var result = "";

for (let i = 0; i < 5; i++) {
  var blank = " ".repeat(i);
  var star = "*".repeat(5 - i);
  result += blank + star + "\n";
}

console.log(result);

var result = "";
var blank = "";
var star = "*****";

for (let i = 0; i < 5; i++) {
  result += blank + star + "\n";
  blank += " ";
  star = star.slice(1);
}

console.log(result);

// 13. 삼각형 출력하기 -3

var result = "";

for (let i = 0; i < 5; i++) {
  var star = "*".repeat(5 - i);
  var blank = " ".repeat(i);
  result += star + blank + "\n";
}

console.log(result);

// 14. 삼각형 출력하기 -4
var result = "";

for (let i = 0; i <= 5; i++) {
  var star = "*".repeat(i);
  var blank = " ".repeat(5 - i);
  result += blank + star + "\n";
}

console.log(result);

// 15. 정삼각형 출력하기
var result = "";

for (let i = 0; i < 5; i++) {
  var blank = " ".repeat(5 - i);
  var star = "*".repeat(2 * i + 1);
  result += blank + star + "\n";
}

console.log(result);

// 16. 역정삼각형 출력하기
var result = "";

for (let i = 4; i >= 0; i--) {
  var blank = " ".repeat(4 - i);
  var star = "*".repeat(2 * i + 1);
  result += blank + star + "\n";
}

console.log(result);
