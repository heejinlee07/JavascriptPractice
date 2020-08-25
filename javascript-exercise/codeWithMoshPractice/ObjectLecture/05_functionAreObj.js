function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

Circle.name; //"Circle"
Circle.length; //1 (argument 개수)
Circle.constructor; //f Function() { [native code] }

/**
 * NOTE:
 * when we declare a function, internally JS engine will
 * use this function constructor to creat object.
 */

// whew we declart a function internally, it's represented like this.

const Circle1 = new Function(
  "radius",
  `this.radius = radius;
this.draw = function () {
  console.log("draw");
};`
);

const circle = new Circle1(1);

//empty object will reference this object that we pass here.
//아래 만들어진 object는 위의 circle에 할당된 생성자 함수와 동일하다.
Circle.call({}, 1);

//new 키워드를 안쓰게 되면 전역을 가리키게 된다.
const circle = Circle1(1);
Circle.call(window, 1);

Circle.call({}, 1); //passing all the arguments
Circle.cpply({}, [1, 2, 3]); //pass them in an array.
