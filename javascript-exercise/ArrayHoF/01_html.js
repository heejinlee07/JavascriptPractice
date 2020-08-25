//아래 배열을 사용하여 html을 생성하는 함수를 작성하라.

const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

function render() {
  let html = "";

  todos.forEach(todo => {
    html += `<li id = "${todo.id}"><label><input type="checkbox" ${
      todo.completed ? "checked" : ""
    }>${todo.content}</label></li>`;
  });
  return html;
}

//값이 올 문맥이니까 삼항연산자 자리에 if문은 쓸 수 없다.
//html =만 하면 계속 재할당됨. 그렇기 때문에 +=으로.

console.log(render());

function render() {
  let html = "";

  todos.forEach(todo => {});

  return html;
}
