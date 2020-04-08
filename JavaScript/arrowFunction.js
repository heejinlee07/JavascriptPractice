var obj = {
  x: 10,
  f: function() {
    return this.x;
  }
};

console.log(obj.f());
//프로퍼티 f에 할당된 함수를 메소드로 호출

var bar = obj.f;
console.log(bar());
//프로퍼티 f에 할당된 함수를 일반 함수로서 호출

console.log(new obj.f());
//프로퍼티 f에 할당된 함수를 생성자 함수로서 호출

//이렇게 객체에 바인딩된 함수가 constructor라면 protorype 프로퍼티에 바인딩된 프로토타입 객체를 생성한다는 의미.
//콜백함수도 constructor이므로 불필요한 프로토타입 생성

[1, 2, 3].map(function(item) {
  return item * 2;
});

const obj = {
  x: 1,
  foo() {
    return this.x;
  }, //메소드
  bar: function() {
    return this.x;
  } //일반함수
};

console.log(obj.foo());
console.log(obj.bar());

/*메소드 foo는 non-costructor이므로 인스턴스를 생성할 수 없어서 
new 생성자 함수로 호출시 타입에러가 발생한다.인스턴스를 생성하지 않으니 
프로토타입도 생성하지 않는다.*/

//매개변수가 여러개인 경우 소괄호 안에 선언
(x,y) => {
  ...
}

//매개변수가 한 개인 경우 소괄호 생략
x => {
  ...
}

//매개변수가 없으면 소괄호 생략 불가
() => {
  ...
}

x => x * x  
x => {return x * x}
//위와 아래는 동일. 함수 몸체가 한줄의 문으로 구성되면 중괄호 생략 가능하므로.

//일반함수라면 이런 형태
const bar = function (x){
  return x *x; 
};

console.log(bar(2))

const now = () => Date.now();
now();

//함수표현식으로 나타내면

var now = function() {
  return Date.now();
};
now();

//매개 변수가 한 개인 화살표 함수
const identity = value => value;

//함수 표현식으로 나타내면
var identity = function(value){
  return value;
}

//매개 변수가 여러 개인 화살표 함수
const sum = (a,b) => a + b;

//함수 표현식으로 나타내면
var sum = function(a,b){
  return a + b;
}

//함수 몸체가 여러 줄인 경우 화살표함수에서 중괄호 생략 불가
//반환값이 있는 경우 명시적으로 반환한다.

//화살표 함수
const sum = (a,b) =>{
  const result = a+b;
  return result;
}

//함수표현식으로 나타내면

var sum = function(a,b){
  const result = a+b;
  return result;
}

//객체 리터럴을 반환할 때는 소괄호로 감싸준다.
() => ({a:1}) //() => {return {a:1}}과 동일하다.

//화살표 함수
const create = (id, content) =>({id, content})

//함수 표현식으로 나타내면
var create = function(id,content){
  return {id, content}
}

create(1,'javascript')

//콜백함수 정의시 유용

//es5
[1,2,3].map(function(v){
  return v * 2;
})

//es6
[1,2,3].map(v => v * 2)

/*rest 파라미터
매개변수 앞에 점 세개 붙임. 함수에 전달된 인수들의 목록을 '배열'로 전달받음*/

function foo(...rest) {
  console.log(rest); //[1,2,3,4,5]
  console.log(Array.isArray(rest)); //true
}

foo(1, 2, 3, 4, 5);


function foo(param, ...rest) {
  console.log(param);
  console.log(rest);
}

foo(1, 2, 3, 4, 5, 6);

function bar(param1, param2, ...rest) {
  console.log(param1);
  console.log(param2);
  console.log(rest);
}

bar(1, 2, 3, 4, 5, 6);

/*먼저 할당된 인수를 제외한 나머지 인수들이 배열에 담겨 할당. 따라서 ...rest는 
반드시 가장 마지막에 위치해야하며 단 하나만 선언할 수 있다.*/