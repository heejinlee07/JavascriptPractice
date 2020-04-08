console.log(1);
setTimeout(function() {
  console.log("hello");
}, 1000);

console.log("2");

//비동기 1 -> 2-> setTimeout 순서로 출력됨.
