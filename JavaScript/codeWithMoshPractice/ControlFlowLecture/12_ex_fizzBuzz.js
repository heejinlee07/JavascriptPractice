//input 을 넣으면 string이 반환되게한다.
//divisible by 3 => Fizz
//divisible by 5 => buzz
//divisible by both 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//Not a number => 'Not a number'

//mosh ver.

//NaN not a number

const output2 = fizzBuzz(15);
console.log(output2);

function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a Number"; //먼저 숫자인지 아닌지를 판별해야함. 숫자가 아니면 숫자를 나누는 조건들은 어차피 의미없음.
  if (input % 3 === 0) return "fizz";
  if (input % 5 === 0) return "Buzz";
  if (input % 3 === 0 && input % 5 === 0) return "fizzBuzz";
  return input;
}

/*이 경우 15를 입력하면 원하는 결과인 fizzbuzz 대신 fizz가 출력된다.
15는 3또는 5로 나누어지는 수이기 때문에 첫번째 if 조건문 input % 3 ===0을 만났을 때
조건을 충족하여 실행을 끝내버린다. 따라서 3또는 5로 나누어지는 조건까지 도달하지 못하여 fizz가 출력되는 것.
이를 방지하기 위해 &&가 있는 조건문의 순서를 바꾼다.*/

function fizzBuzz(input) {
  if (typeof input !== "number") {
    return "Not a Number";
  } //먼저 숫자인지 아닌지를 판별해야함. 숫자가 아니면 숫자를 나누는 조건들은 어차피 의미없음.
  //만약 Not a Number" 대신 "NaN"을 입력했을 때, typeof NaN 하면 "number"가 나온다.
  if (input % 3 === 0 && input % 5 === 0) {
    return "fizzBuzz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else if (input % 3 === 0) {
    return "fizz";
  } else {
    return input;
  }
}
const output = fizzBuzz(15);
console.log(output);

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(7));
console.log(fizzBuzz("hello"));
