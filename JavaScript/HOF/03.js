let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

function sortBy(key) {
  return todos.sort(function (a, b) {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}

console.log(sortBy("id"));
console.log(sortBy("content"));
console.log(sortBy("completed"));
