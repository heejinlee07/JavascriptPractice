let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

function toggleCompletedById(id) {
  todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    //앞의 조건이 성립하면 뒤의 조건을 실행하라.
  });
}

toggleCompletedById(2);

console.log(todos);
