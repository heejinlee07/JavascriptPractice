let i = 0;
while (i < 5) {
  console.log(i);
  i++; //만약 i++을 깜빡하고 기입하지 않으면 무한루프 발생.
}

while (true) {
  //무한루프 발생
}

let x = 0;
do {
  x++; //만약 x++을 깜빡하고 기입하지 않으면 무한루프 발생.
} while (x < 5);


for(let i = 0; i < 10;) //무한루프