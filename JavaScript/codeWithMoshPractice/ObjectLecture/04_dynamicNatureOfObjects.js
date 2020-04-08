//javascript object are dynamic
// 한 번 객체를 만들면 새로운 프로퍼티나 메소드를 추가 또는 삭제할 수 있다.

const circle = {
  radius: 1
};

/* circle = {}; 
const는 재할당이 불가하므로, 위와 같이 사용하면 에러발생
*/

//동적추가
circle.color = "yellow";
circle.draw = function() {};

//삭제
delete circle.color;
delete circle.draw;

console.log(circle);
