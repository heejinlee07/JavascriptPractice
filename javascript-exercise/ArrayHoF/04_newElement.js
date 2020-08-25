/*
새로운 요소(예를 들어 { id: 4, content: 'Test', completed: false })를 인수로 전달하면 
todos의 선두에 새로운 요소를 추가하는 함수를 작성하라. 단, Array#push는 사용하지 않도록 하자.
*/
/*
let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

function addTodo(newTodo) {
  return todos.concat(newTodo);
}
console.log(addTodo({ id: 4, content: "Test", completed: false }));
*/
let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

function addTodo(newTodo) {
  return todos.unshift(newTodo);
}

addTodo({ id: 4, content: "Test", completed: false });

console.log(todos);

//다른 버전
//앞에다 넣을래 뒤에다 넣을래?
//mutator는 쓰지맙시다

function addTodo(newTodo) {
  todos = [newTodo, ...todos]; //재할당해서 바꾼다는 것은 객체를 원시값처럼 쓴다는것.
  //주소값 바뀜. 바꼈다는 것을 알게됨.
  //mutator를 쓰면 주소값이 그대로니까 바꼈다는 것을 알기 어려움.
  //todos = [...todos,newTodo]; //맨뒤에 들어감
}
