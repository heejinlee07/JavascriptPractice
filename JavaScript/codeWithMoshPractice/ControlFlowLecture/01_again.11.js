console.log(showPrimes(20));

function showPrimes(limit) {
  let result = 0;
  for (let i = 0; i < limit; i++) {
    if (i % 2 === 0) return;
    else {
      return (result += i);
    }
  }
}
