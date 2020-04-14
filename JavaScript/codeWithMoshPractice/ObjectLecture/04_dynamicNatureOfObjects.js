//javascript object are dynamic
//한 번 객체를 만들면 새로운 프로퍼티나 메소드를 추가 또는 삭제할 수 있다.

const circle = {
  radius: 1,
};

/**
 * circle = {};
 * const는 재할당이 불가하므로, 위와 같이 사용하면 에러발생
 * 프로퍼티의 추가 또는 삭제만 가능
 */

//동적추가
circle.color = "yellow";
circle.draw = function () {};

//삭제
delete circle.color;
delete circle.draw;

console.log(circle);

//every object in javascript has a property called constructor.

let x = {};

//위와 같이 오브젝트 리터럴을 사용하면 JS는 아래와 같이 해석
//let x = new Object();

//JS는 아래와 같은 built in construtor를 가지고 있다.
new String(); //'', "", ``
new Boolean(); //true, false
new Number(); //1, 2, 3...

/**
 * REMIND: every Object has a constructor property,
 * and that references a function that was used to create that Object.
 */
