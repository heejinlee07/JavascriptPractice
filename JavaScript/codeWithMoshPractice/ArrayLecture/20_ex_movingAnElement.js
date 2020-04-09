const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);

console.log(output);

//TODO: 강의 다시보기

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("invalid offset.");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}