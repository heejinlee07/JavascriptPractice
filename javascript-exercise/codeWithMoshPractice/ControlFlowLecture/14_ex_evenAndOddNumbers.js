showNumbers(20);
/*
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(`${i} "EVEN"`);
    } else if (i % 2 !== 0) {
      console.log(`${i} "ODD"`);
    }
  }
}
*/

/*
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(`${i} "EVEN"`);
    } else {
      console.log(`${i} "ODD"`);
    }
  }
}
*/
/*
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    console.log(i % 2 === 0 ? `${i} "EVEN"` : i % 2 !== 0 ? `${i} "ODD"` : "");
  }
}
*/

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "even" : "odd";
    console.log(i, message);
  }
}
