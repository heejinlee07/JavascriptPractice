// State
let todos = [];

//DOM
const $todos = document.querySelector(".todos");
const $inputTodo = document.querySelector(".input-todo");
const $completeAllCheck = document.querySelector(".complete-all");
const $clearCompleted = document.querySelector(".clear-completed > .btn");
const $activeTodos = document.querySelector(".active-todos");
// 정렬방법
const $ascending = document.querySelector("#ascending-btn");
const $descending = document.querySelector("#descending-btn");
const $newSorting = document.querySelector("#new-sort-btn");
const $completedTodos = document.querySelector(".completed-todos");

//render 함수
const render = () => {
  let html = "";

  //FIXME. 대소문자 구별 Completed라고 적어서 실행되지 않았었다.
  todos.forEach((todo) => {
    html += `<li id="${todo.id}" class="todo-item">
    <input id="${todo.id}" class="checkbox" type="checkbox" ${
      todo.completed ? "checked" : ""
    }>
    <label for="${todo.id}">${todo.content}</label>
  <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });

  $todos.innerHTML = html;
  /**
   * filter는 boolean값 중 true인 것만을 반환. todo.completed가 true인 것만 반환하고,
   * 그 값의 개수를 찾기 위해 마지막에 length사용.
   * active도 동일하게 적용하지만, false인 경우를 filter것이므로 !todo.completed로
   * false인 경우를 나타내고, length로 개수를 찾는다.
   */

  $completedTodos.innerHTML = todos.filter((todo) => todo.completed).length;
  $activeTodos.innerHTML = todos.filter((todo) => !todo.completed).length;
  //innerHTML은 dom에 있는 todos클래스명을 갖는 ul의 내부값을 위의 html변수의 값으로 바꾼다.
};

//ID
const generateId = () => {
  return todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
};

/* 1. .map((todo) => todo.id)) => [1,2,3]
  2. .todos.map((todo) => todo.id)) => 1,2,3
  3. Math.max => Math.max(1,2,3) => 3
  4. 3 + 1 = 4
  5. todos.length = 3 => true => return 4
*/

//get Data
//onload될 때 한번만 실행된다.
const getTodos = () => {
  todos = [
    { id: 1, content: "HTML", completed: true },
    { id: 2, content: "CSS", completed: false },
    { id: 3, content: "Javascript", completed: true },
  ];
  render();
};

//window가 로딩될 때 getTodos를 부른다.
//why. gettodos는 함수인데 gettodos()가 아니라 gettodos인가?
window.onload = getTodos;
//window가 로드될 때 getTodos의 값을 가져온다.

//input창에 내용입력할 때.
$inputTodo.onkeyup = (e) => {
  //enter키가 아니면 거절. 이 조건이 없다면 모든 키를 눌렀을 떄 다 등록됨.
  if (e.key !== "Enter") return;
  console.log(e.target.value);

  todos = [
    { id: generateId(), content: $inputTodo.value, completed: false },
    ...todos,
  ];

  /**
   * 여기 todos와 getTodos의 todos는 다르다.
   * id는 동적으로 생성, content는 input창에 입력한 값이 들어가고,
   * 체크박스는 초기에는 체크되지 않은 상태이므로 false
   *그리고 그 다음으로 원래 있던 todos값이 위치한다.
   */
  $inputTodo.value = "";
  //input창 초기화
  render();
};

//삭제 버튼 및 체크박스
//ul 요소 클릭시 반응
/**
 * 내가 클릭한 대상이 todos의 li의 input과 일치하는지 확인한다.
 * 여기서 li의 label은 사용자 인터페이스 항목의 설명을 나타낸다.
 *
 * <label for="cheese">Do you like cheese?</label>
 * 이렇게 쓰면 화면에 Do you like cheese?라고 보여진다.
 */

$todos.onclick = (e) => {
  /**
   * todos에 클릭이벤트가 발생했을 때 .todos>li>label이 true라면
   * todos를 map한 값을 todos에 할당한다.
   * todo.id랑 선택한 id값이 같을 경우 true이면 새로운 객체를 만드는데
   * 기존의 todo값을 ...todo로 가져오고 completed값만 반전시킨다.(eg.true -> false)
   * false일 경우 기존에 있던 todo를 return한다.
   */
  if (e.target.matches(".todos>li>label")) {
    let id = e.target.parentNode.id;

    todos = todos.map((todo) =>
      todo.id === parseInt(id) ? { ...todo, completed: !todo.completed } : todo
    );
  }

  /**
   * todos에 click이벤트가 발생했을 때, .todos>li>i가 true라면
   * todos를 filter한 true값을 todos에 할당한다.
   * todo의 id가 i의 parentNode인 li의 id와 같지 않다면 true.
   * 같지 않은 경우만 true값이므로 todos에 할당. 같을 경우 삭제됨.
   */

  if (e.target.matches(".todos>li>i")) {
    // 인수로 전달된 선택자에 의해 특정 노드를 탐색 가능한지 확인한다.
    todos = todos.filter(
      (todo) => todo.id !== parseInt(e.target.parentNode.id)
    );
  }
  render();
};

//전체 선택 체크박스
$completeAllCheck.onclick = (e) => {
  todos = todos.map((todo) => {
    return { ...todo, completed: true };
  });
  render();
};

//clear completed
$clearCompleted.onclick = (e) => {
  /**
   * 체크된 항목을 지운다.
   * filter를 통해 체크되지 않은 항목만 유지한다.
   */
  todos = todos.filter((todo) => {
    /**
     * todo.completed:false인 항목만 유지한다.
     * todo.completed면 true인 것만 들어가니까,
     * completed된 값만 들어가는 것과 동일.
     * !todo.completed라고 쓰면 정반대의 값.
     */

    //false항목만 남겨야한다. true인 항목은 제거된다.
    return !todo.completed;
  });
  render();
};

$ascending.onclick = (e) => {
  todos.sort(function (a, b) {
    const nameA = a.content.toUpperCase();
    const nameB = b.content.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  result();
};

$descending.onclick = (e) => {
  todos.sort(function (a, b) {
    const nameA = a.content.toUpperCase();
    const nameB = b.content.toUpperCase();
    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;
    return 0;
  });
  result();
};

$newSorting.onclick = (e) => {
  todos.sort(function (a, b) {
    if (a.id < b.id) return 1;
    if (a.id > b.id) return -1;
    return 0;
  });
  result();
};
