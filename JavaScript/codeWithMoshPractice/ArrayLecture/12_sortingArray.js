const numbers = [2, 3, 1];
//converts each element here to a string and then srots the elements in the array.
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

/*
배열 안에 숫자나 문자가 있을 때는 위와 같이 사용하기 매우 편리하지만
객체가 있을 떄는 추가적인 작업이 필요하다.
*/

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "Javascript" },
];

courses.sort();
console.log(courses); //nothing happen

courses.sort(function (a, b) {
  // a < b => -1
  //a > b => 1
  // a === b => 0

  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
console.log(courses);

//만약 courses의 'Javascript'를 소문자 'javascript'로 바꾼다면?
//ASKII 코드 때문에 javascript가 다시 Node.js의 뒤로 온다.
courses.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > namenB) return 1;
  return 0;
});
