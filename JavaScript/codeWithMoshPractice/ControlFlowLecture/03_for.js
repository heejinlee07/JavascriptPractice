//loops - repeat an action a number of Times.

/*for(initialExpression; condition; incrementExpression){
  statement
} condition은 i의 value와 다른 것을 비교하기 위함. */

for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}

//i는 index를 의미. loop는 조건의 평가결과가 true인 동안은 계속 실행된다.
//condition에서 5번 loop를 실행한다는 것은 i를 5와 비교한다는 것. 5보다 적을 동안은 loop가 실행된다.

// odd numbers
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//odd number - reverse order
for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//odd numbers - row

let row = "";

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    row += i;
  }
}
console.log(row);
