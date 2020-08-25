//primitive
//x,y is are two independent variables.
let primitiveX = 10;
let primitivey = primitiveX;

primitiveX = 20;
console.log(primitiveX); //20

//object
/**
 * when we copy objectX into objectY,
 * it's the address or the reference that is copied.
 * both objectX and objectY are pointing to the same object in memory.
 */
let objectX = { value: 10 };
let objectY = objectX;

objectX.value = 20;
console.log(objectX); //{value:20}
console.log(objectY); //{value:20}

/**
 * REMIND:
 * Primitives are copied by their value.
 * value types: Number, String, Boolean, symbol, undefined, null
 * Objects are copied by their reference.
 * reference types: object, function, array
 */
let number = 10;

function increase(number) {
  number++;
  //number++과 let으로 선언된 number 변수는 완전히 독립적인 개념.
  //number는 이 함수 내에서만 유효.
  console.log(number); //여기서 찍는 number은 11이다.
}

increase(number);
console.log(number); //여기서 찍는 number는 let으로 선언된 number변수이므로 10.

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
  console.log(number);
}

increase(obj);
console.log(obj); //{value:11}
