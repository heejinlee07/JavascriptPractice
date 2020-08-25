const output = fizzBuzz(7);

console.log(output);

function fizzBuzz(input) {
  console.log(typeof input);
  if (typeof input !== "number") return "not a number";
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  if (input % 3 !== 0 && input % 5 !== 0) return input;
}
