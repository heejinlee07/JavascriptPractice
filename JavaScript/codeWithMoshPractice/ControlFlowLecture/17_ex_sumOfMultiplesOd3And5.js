console.log(sum(10));

//multiple of 3: 3,6,9
//multiple of 5: 5,10

function sum(limit) {
  let result = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}
