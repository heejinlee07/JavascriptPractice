// todos에서 삭제할 요소의 id를 인수로 전달하면 해당 요소를 삭제하는 함수를 작성하라.

let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

function removeTodo(id) {
  return todos.splice(1, 1);
}

removeTodo(2);

console.log(todos);

//삭제 = 필터
function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id); //비교를 위해 id를 받은 것.
}

//객체가 바뀌면 객체는 무조건 재할당.
//배열안에 없는 값을 호출하면 아무것도 필터하지 않는다.
