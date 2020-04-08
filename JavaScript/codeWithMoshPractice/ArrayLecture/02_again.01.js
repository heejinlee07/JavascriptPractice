const numbers = arrayFromrange(-10, -4);

console.log(numbers);

function arrayFromrange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}
