/*
요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 요소를 정렬하는 함수를 작성하라.
단, todos는 변경되지 않도록 하자.
*/

const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
]; //상태

//비순수함수
function sortBy(key) {
  return todos.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
}

console.log(sortBy("id"));
console.log(sortBy("content"));
console.log(sortBy("completed"));

// 수업.
function sortBy(key) {
  return todos.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
  //a,b는 요소. 객체를 비교하는 것. 말이안된다.
  //그래서 a[key] -> 값을 비교한다는 뜻.
}

/*
sort의 다른 예시
*/
const todos = ["b", "a", "c"];
todos.sort();
console.log(todos); //['a','b','c']
console.log(todos.reverse()); //내림차순 정렬
//문자열이면 굳이 콜백으로 부르지 않아도 된다. 문자열을 대상으로 정렬.

const todos = [1, 4, 11, 7];
todos.sort((a, b) => a - b); //숫자일 때는 비교함수가 필요하다.오름차순 정렬.
todos.sort((a, b) => b - a); //숫자일 때는 비교함수가 필요하다.내림차순 정렬.
