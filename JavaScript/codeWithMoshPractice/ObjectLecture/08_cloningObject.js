const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const another = {};

for (let key in circle) another[key] = circle[key];

another["radius"] = circle["radius"];

console.log(another);
//another.adrw() //draw

//다음과 같은 방법으로 위와 똑같은 결과를 반환할 수 있다.
const anotherAssign = Object.assign({}, circle);
//프로퍼티를 추가할 수 있다.
const anotherAssignAdd = Object.assign(
  {
    color: "yellow",
  },
  circle
);
console.log(anotherAssign);
console.log(anotherAssignAdd);

//스프레드를 이용해서 간단하게 object를 clone할 수도 있다.
const anotherSpread = { ...circle };
console.log(anotherSpread);

/**
 * NOTE:
 * 'Object.assign' copies the properties and methods
 * from 1 or more souece objects into a target objet,
 * and we can use that to clone an object, or combine
 * multiple objects into a single object.
 *
 * 'spread operator' is used to spread an object,
 * which means getting all it's properties and method
 * and putting them into another object.
 */
