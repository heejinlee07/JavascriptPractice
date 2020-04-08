const numbers = [1, 2, 3];

//for...of에서는 forEach처럼 index를 쓸 수 없다.
//index를 쓰고자 하면 for...in을 사용해야한다.
for (let number of numbers) console.log(number);

numbers.forEach(function(number) {
  console.log(number);
});

//화살표 함수로 더 간단하게
numbers.forEach(number => console.log(number));

//forEach에서는 index와 같이 파라미터를 더 쓸 수 있다.
numbers.forEach((number, index) => console.log(index, number));
