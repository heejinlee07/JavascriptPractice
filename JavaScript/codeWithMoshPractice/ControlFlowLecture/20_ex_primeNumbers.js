showPrimes(20);

//Prime(whose factors are only one and itself)
//it cannot be dived evenly into another number
//11 = 1, 11
//composite
//12 = 1,2,3,4,6,12(these are factors of 12)
//can be devided evenly by its factor

function showPrimes(limit) {
  for (let i = 1; i < limit; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
