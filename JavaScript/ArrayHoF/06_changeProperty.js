/*todos에서 대상 요소의 id를 인수로 전달하면 해당 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라.
hint) 기존 객체의 특정 프로퍼티를 변경/추가하여 새로운 객체를 생성하려면 Object.assign 또는 스프레드 문법을 사용한다.*/

let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

function toggleCompletedById(id) {}

toggleCompletedById(2);

console.log(todos);

//수업ver.
function toggleCompletedById(id) {
  //map filter reduce 중에 뭘쓸까~~~ map(똑같은 숫자의 값이 나옴.)
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

//object.assign으로 만들었을 때.
function toggleCompletedById(id) {
  //map filter reduce 중에 뭘쓸까~~~ map(똑같은 숫자의 값이 나옴.)
  todos = todos.map(todo => (todo.id == id? Object.assign({}, todo, {completed : !todo.completed}):todo)
}
