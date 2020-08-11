// State
let todos = [];

const $inputTodo = document.querySelector(".input-todo");
const $todos = document.querySelector(".todos");
const $ascending = document.querySelector("#ascending-btn");
const $descending = document.querySelector("#descending-btn");
const $newSorting = document.querySelector("#new-sort-btn");
const $completeAll = document.querySelector(".complete-all");

const result = () => {
  let html = "";
  todos.forEach(todo => {
    return (html += `<li id="${todo.id}" class="todo-item">
  <input id="${todo.id}" class="checkbox" type="checkbox" ${
      todo.completed ? "checked" : ""
    }>
  <label for="${todo.id}">${todo.content}</label>
  <i class="remove-todo far fa-times-circle"></i>
</li>`);
  });

  $todos.innerHTML = html;
};

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};

const getTodos = () => {
  todos = [
    { id: 1, content: "HTML", completed: true },
    { id: 2, content: "CSS", completed: false },
    { id: 3, content: "Javascript", completed: true }
  ];
  result();
};

window.onload = getTodos;

$inputTodo.onkeyup = e => {
  if (e.keyCode !== 13) return;
  todos = [
    { id: generateId(), content: $inputTodo.value, completed: false },
    ...todos
  ];
  $inputTodo.value = "";
  console.log(todos);
  result();
};

$todos.onclick = e => {
  console.log(e.target.matches(".todos>li>label"));
  if (e.target.matches(".todos>li>input")) {
    console.log("hello");
    result();
  }
  if (!e.target.matches(".todos>li>i")) return;
  todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
  result();
};

$ascending.onclick = e => {
  todos.sort(function(a, b) {
    const nameA = a.content.toUpperCase();
    const nameB = b.content.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  result();
};

$descending.onclick = e => {
  todos.sort(function(a, b) {
    const nameA = a.content.toUpperCase();
    const nameB = b.content.toUpperCase();
    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;
    return 0;
  });
  result();
};

$newSorting.onclick = e => {
  todos.sort(function(a, b) {
    if (a.id < b.id) return 1;
    if (a.id > b.id) return -1;
    return 0;
  });
  result();
};

$completeAll.onclick = e => {
  todos = [];
  result();
};
