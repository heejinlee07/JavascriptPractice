/*
요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 각 요소 중, 
해당 프로퍼티의 값만을 추출한 배열을 반환하는 함수를 작성하라.
단, for 문이나 Array#forEach는 사용하지 않도록 하자.
*/

const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

function getValues(key) {
  const todosWithProperty = todos.map(todo => {
    return todo[key];
  });
  return todosWithProperty;
}

console.log(getValues("id"));
console.log(getValues("content"));
console.log(getValues("completed"));


//다른버전
function getValues(key) {
  return todos.map(todo => todo[key]);
//todo.key와 구분할것.
//todo[key]로 만들어진 배열을 반환함.

//아래와 같이 표현도 가능
const getValues =key => todos.map(todo => todo[key]);