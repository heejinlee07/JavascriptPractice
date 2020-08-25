//input 을 넣으면 string이 반환되게한다.
//divisible by 3 => Fizz
//divisible by 5 => buzz
//divisible by both 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//Not a number => 'Not a number'

function buzzSay(input) {
  if (typeof input !== "number") return "not a number";
  if (input % 3 === 0 && input % 5 === 0) return "fizzbuzz";
  if (input % 3 === 0) return "fizz";
  if (input % 5 === 0) return "buzz";
  if (input % 3 !== 0 || input % 5 !== 0) return input;
}

console.log(buzzSay(3));
console.log(buzzSay(5));
console.log(buzzSay(15));
console.log(buzzSay(7));
console.log(buzzSay("idiot"));
