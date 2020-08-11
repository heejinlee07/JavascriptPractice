function sayHi() {
  console.log(name);
  console.log(age);
  var name = "lydia";
  let age = 21;
}

sayHi();

let c = { greeting: "HEY!" };
let d;

d = c;
c.greeting = "hello";
console.log(d.greeting);

function bark() {
  console.log("woof!");
}

bark.animal = "dog";

function sum(a, b) {
  return a + b;
}
sum(1, "2");

function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("you are an adult!");
  } else if (data == { age: 18 }) {
    console.log("you are still an adult");
  } else {
    console.log("hmm..you don't have an age i guess");
  }
}

checkAge({ age: 18 });

var person1 = {
  name: "Lee"
};

var person2 = {
  name: "Lee"
};

console.log(person1 === person2);

console.log(person1.name === person2.name);

var num = 8;
var num = 10;

console.log(num);

for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

console.log(3 + 4 + "5");

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

const obj = { a: "one", b: "two", a: "three" };
console.log(obj);

const person = {
  name: "Lydia",
  age: 21
};

for (const item in person) {
  console.log(item);
}

//speed limit = 70 -> OK
// every 5km -> 1 point
//Math.floor(1.3)->1
//more than 12 points -> License suspended
