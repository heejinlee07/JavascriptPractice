const values = [1, 2, 3, 4, 5];

console.log(Math.max(...values));

//es6이전에는 아래와 같이 작성.
console.log(values.length ? Math.max.apply(null, values) : 0); //5

//reduce 사용
const max = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);

//만약 빈 배열이라면? -infinity가 나옴.
//인수는 반드시 하나 이상 있어야 함.

const noValues = [];
console.log(noValues.length ? Math.max(...noValues) : 0);
