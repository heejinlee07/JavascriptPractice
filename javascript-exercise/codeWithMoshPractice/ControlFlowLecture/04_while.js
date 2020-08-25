//for문은 variable 선언이 for문 내부에 있지만 while문에서는 variable 선언이 외부에 있음.

//for문
for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//while문
/*
let i = 0;

while(condition){ //condition이 true이면 코드블록 안의 statement가 실행됨. false가 될때 loop종료
  statement
  incrementExpression
}*/

let i = 0; //for문 안에 있는 let i =0이랑 똑같이 생겼지만 완전히 다름. for문 안의 let은 for문 내에서만 유효(스코프)

while (i <= 5) {
  if (i % 2 !== 0) {
    console.log(i);
    i++;
  }
}
