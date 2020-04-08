const fruits = ["banana", "apple", "orange", "orange", "apple"];

const count = fruits.reduce((acc, cur) => {
  console.log(acc); //{} => {banana:1}=>{banana:1,apple:1}=>{banana:1,apple:1, orange:1}
  //{banana:1,apple:1, orange:2}=>
  acc[cur] = (acc[cur] || 0) + 1; //acc[cur]이 undefined면 1로 초기화(반환값없음)
  return acc;
}, {});

console.log(count);

const values = [1, [2, [3]], 4, [5, 6]];

const flattern = values.flat(2);
console.log(flattern);

const flattern1 = values.reduce((acc, cur) => acc.concat(cur), []);

console.log(flattern1);
