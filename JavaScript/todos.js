let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

function countCompletedTodos() {
  return todos.filter((todo) => todo.completed).length;
}

console.log(countCompletedTodos());

var paints = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];

function pluck(array, property) {
  paints.map((paint) => {
    return array["property"];
  });
}

pluck(paints, "color");

console.log(pluck);
