const sum = (...args) => {
  console.log(Array.isArray(args));
  console.log(args);
};

sum(1, 2, 3);

var arr1 = [1, 2];
var arr2 = [3, 4];

//arr1.push(arr2);
//console.log(arr1); //[1,2, [3,4]]

console.log(Array.prototype.push.apply(arr1, arr2));
//이렇게 써도 된다
[].push.apply(arr1, arr2);
//왜 이렇게 써도 되는걸까?
//하지만 이런 것보다 concat 또는 스프레드 문법이 더 좋다.
console.log(arr1);

const o1 = { x: 1, y: 2 };
const o2 = { y: 100 };

// o1 ===o2 false
const o3 = [...o1, ...o2]; // {x:1, y:100}
//새롭게 만들면서 o1,o2의 프로퍼티를 푼 것이고
//프로퍼티 중복이니까 뒤에 온 것이 우선되어 앞에것을 덮어씀.
//새롭게 만든 것이니 o1, o2 ,o3 다다름.
Object.assign(o1, o2); //{x:1, y:100} o1을 기준으로 o2를 덮어쓴 것.참조값은 같으나 100으로 바뀜.
Object.assign({}, o1, o2); //{x:1, y:100} //참조값은 같으나 100으로 바뀜.
// 기존에 있는 것을 상태 변경하지 않으면서 새롭게 만들려면 앞에 빈 배열을 써줌.
//o2를 기준으로 o1이 바뀌고, 또 {}이 바뀜.
