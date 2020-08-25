var expense = {
  type: "Business",
  amount: "$45 USD",
};

// ES5
// 값을 찾거나 복제하고 싶을 때 중복이 발생.
// var type = expense.type;
// var amount = expense.amount;

// ES6
/**
 * NOTE:
 * {}를 이용하여 중복을 줄인다.
 * {}는 새로운 객체를 만드는 것이 아니다.
 * type이라고 부르는 새로운 변수를 선언하고,
 * expense.property를 참조하겠다.
 
 const { type } = expense;
 const { amount } = expense;
 */

// {}안의 변수명은 프로퍼티명과 동일해야한다.
const { type, amount } = expense;
console.log(type, amount);
