/*
if (condition) {
  // 컨디션의 평가결과가 트루이면 실행된 후에 스테이트먼트를 위치 시킴.
  statement; //multiple statement 가능
} else if (anotherCondition) {
  statement;
} else if (yetAnotherCondition) statement;
*/

/* else stetement
원하는 만큼 조건을 만들 수 있고, 1개 이상의 statements가 있고, 조건의 평가결과가 트루면 else문을 실행시킬 수 있다. */

//Hour
// if hour is between 6am and 12pm: good morning!
// if it is between 12pm and 6pm: good afternoon!
//otherwise: good evening!

let hour = 10;

if (hour >= 6 && hour < 12) console.log("Good Morning!");
else if (hour >= 12 && hour < 18) console.log("Good Afternoon!");
else console.log("Good evening!");
