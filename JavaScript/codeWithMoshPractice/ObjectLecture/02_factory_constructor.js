//Factory function -> produce object
//camel notation

function createCircle(radius) {
  return {
    //radius: radius와 같음.
    radius,
    //object 내부의 function은 function 키워드를 생략한다.
    draw() {
      console.log("draw");
    }
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//constructor function -> pascal notation

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const circle = new Circle(1);

/*
new 연산자는 새로운 객체를 만들고, 함수 내부의 this키워드는
바로 이 빈 객체를 가리킨다. 그리고 new 연산자에 의해 
함수 내부로부터 새로운 객체를 반환한다.
*/

/*
factory function은 함수를 호출하고, 함수 안에 있는 리턴문에 의해
새로운 오브젝트가 반환된다. 반면에 constructor function은 new 연산자를 사용한다.
*/
