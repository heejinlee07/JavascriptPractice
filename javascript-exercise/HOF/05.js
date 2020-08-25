let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

function removeTodo(id) {
  const newTodos = todos.filter((todo) => {
    return todo.id !== id;
  });
  return newTodos;
}

removeTodo(2);

console.log(todos);
