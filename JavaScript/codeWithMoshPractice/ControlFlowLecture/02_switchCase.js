let role; //the role of current user.
/* 이 경우 role을 초기화한 것으로 default value는 undefined이며,
어떠한 case문과도 일치하지 않으므로, Unknown User가 나옴.*/

/*let role = "guest";
let role = "moderator";
이 경우 role과 일치하는 case가 있으므로 guest면 Guest user가 나옴.
*/

//switch(variable) () 안에 condition 대신 variable 사용.
//코드 블록 안의 1개 이상의 statement는 괄호 안의 variable의 value를 다른 것과 비교하기 위함.
switch (role) {
  case "guest":
    console.log("Guest User");
  // break를 쓰면 jump out of this switch block.

  case "moderator":
    console.log("Moderator User");
    break;

  /*case는 제한없이 설정가능. 위의 case와 role가 일치하는 경우가 없다면  
  default를 선택적으로 사용가능. 스위치 블록의 가장 끝에 있어서 자동으로 
  블록을 빠져나가므로 break;는 필요 없음. */

  default:
    console.log("Unknown User");
}

//switch를 if문으로
let role = "guest";

if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator User");
else console.log("Unknown User");
