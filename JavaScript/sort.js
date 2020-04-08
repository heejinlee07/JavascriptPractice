const todos = [
  { id: 4, content: "JavaScript" },
  { id: 1, content: "HTML" },
  { id: 2, content: "CSS" }
];

//function sortBy('id')
//function sortBy('content')

function sortBy(array, key) {
  return todos.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
}

//id로 sort
console.log(sortBy(todos, "id"));
console.log(sortBy(todos, "content"));

todos.sort((a, b) => a.id - b.id); //빼기는 음수 또는 양수가 나옴
console.log(todos);

todos.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0)); //빼기는 음수 또는 양수가 나옴
console.log(todos);

//content로 sort
todos.sort((a, b) =>
  a.content > b.content ? 1 : a.content < b.content ? -1 : 0
);
console.log(todos);
