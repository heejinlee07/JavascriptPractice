const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

function getValues(key) {
  return todos.map(todo => todo[key]);
}

console.log(getValues("id"));
console.log(getValues("content"));
console.log(getValues("completed"));

todos.filter(todo => todo.id === 1); // [{ id: 1, content: "Javascript", completed: false }]
todos.filter(todo => todo.id !== 1); // id:3, id:2가 출력
