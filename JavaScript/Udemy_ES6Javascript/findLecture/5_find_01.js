var users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];

var user;

for (var i = 0; i < users.length; i++) {
  if (users[i].name === "Alex") {
    console.log((user = users[i]));
    break;
  }
}

user;

/**
 * for loop의 경우 break;를 별도로 작성하지 않는다면
 * 원하는 값을 찾았더라도 전체 loop을 다 순회한다.
 */

/**
 * find를 사용할 경우
 * REMIND: return 키워드를 반드시 사용한다.
 * true인 값이 여러개이더라도 처음 찾은 한 개만 반환한다.
 * cf. filter는 true인 값을 모두 반환.
 */

users.find(function (user) {
  return user.name === "Alex";
});
/**  
* find함수 내부에서 if문을
* 아래와 같이 사용할 필요 없다.

*  if(user.name === 'Alex') {
*    return true;
*  }
*/

// using arrow funcion
users.find((user) => user.name === "Alex");

console.log(user);
