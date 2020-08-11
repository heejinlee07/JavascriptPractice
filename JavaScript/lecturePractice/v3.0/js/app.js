// State 초기값 설정
let todos = [];
let navState = "all";

const $inputTodo = document.querySelector(".input-todo");
const $todos = document.querySelector(".todos");
const $completeAll = document.querySelector(".complete-all");
const $nav = document.querySelector(".nav");

const render = () => {
  let html = "";

  const _todos = todos.filter(({ completed }) =>
    navState === "completed"
      ? completed
      : navState === "active"
      ? completed === false
      : true
  );

  _todos.forEach((todo) => {
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
  return todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
};

const getTodos = () => {
  todos = [
    { id: 1, content: "HTML", completed: true },
    { id: 2, content: "CSS", completed: false },
    { id: 3, content: "Javascript", completed: true },
  ];
  render();
};

const changeNavState = (id) => {
  [...$nav.children].forEach(($navItem) => {
    $navItem.classList.toggle("active", $navItem.id === id);
  });

  navState = id;
  console.log("[changeNaState]", navstate);
  render();
};

window.onload = getTodos;

$inputTodo.onkeyup = (e) => {
  if (e.keyCode !== 13) return;
  todos = [
    { id: generateId(), content: $inputTodo.value, completed: false },
    ...todos,
  ];
  $inputTodo.value = "";
  console.log(todos);
  render();
};

$todos.onclick = (e) => {
  console.log(e.target.matches(".todos>li>label"));
  if (e.target.matches(".todos>li>input")) {
    console.log("hello");
    render();
  }
  if (!e.target.matches(".todos>li>i")) return;
  todos = todos.filter((todo) => todo.id !== +e.target.parentNode.id);
  render();
};

// $completeAll.onchange = (e) => {
//   todos.map(e.target =>{

//   })
//   result();
// };

//tap 바뀌는 것.
$nav.onclick = (e) => {
  if (!e.target.matches(".nav>li:not(.active)")) return;
  console.log(e.target.id); //undefined가 나오면 안됨.

  changeNavState(e.target.id);
};

//현재 선택되어진 내비게이션의 id가 상태-3가지 상태가 있는 것
