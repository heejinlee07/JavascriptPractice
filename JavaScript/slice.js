const _ = require("lodash");
//import _ from "lodash";
//console.log(_);

//lodash를 가져옴.

const todos = [
  { id: 1, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "Javascript", completed: false }
];

const _todos = _.cloneDeep(todos);
console.log(_todos);
console.log(_todos === todos);
console.log(_todos[0] === todos[0]);

const arr = [1, 2, 3];
//es5
const copy1 = arr.slice();
//es6
const copy2 = [...arr];

function sum(...args) {
  console.log(args);
}

sum(1, 2, 3, 4, 5);

function sum() {
  console.log(arguments);
  const arr = Array.prototype.slice.call(arguments);
  return arr.reduce((acc, cur) => acc + cur, 0);
}

sum(arr);

function sum() = (...args) => args.reduce((acc, cur) => acc + cur, 0);

//array,fill
console.log(new Array(5).fill(100))
//array.from
console.log(Array.from({length: 10}, (v,i) => i));

console.log([1,2,3,2].indexOf(2)); // 0 1
console.log([1,2,3,2].indexOf(2,2)); // 3
console.log([1,2,3,2].indexOf(5)); // -1 
console.log([1,2,3,2].includes(5)); // false 있는지 없는지를 확인하고 싶다면. 


const points = [40, 100, 1, 5, 2, 25, 10];

//숫자인 경우에만 콜백함수로 사용.

//오름차순
points.sort((a,b) => (a-b));
console.log(points)

//내림차순
points.sort((a,b) => (b-a));
console.log(points)

//부등호로 하면 어떤 타입인지 상관없이 sort가능