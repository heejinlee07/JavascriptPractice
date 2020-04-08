let i = 0;

while (i <= 10) {
  //if (i === 5) break; //01234 jump out of the loof
  if (i % 2 === 0) {
    i++;
    continue; //13579 jump out next iteration
  }
  console.log(i);
  i++;
}
