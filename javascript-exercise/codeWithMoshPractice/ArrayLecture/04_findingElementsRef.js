//finding elements(reference types)

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" }
];

console.log(courses.includes({ id: 1, name: "a" })); //false
//courses array의 object와 includes 메소드로 전달되는 object는 다른 것.

const course = courses.find(function(course) {
  return course.name === "a";
});
//만약 return course.name === "xyz"를 찾는다면 undefined가 반환됨.

console.log(course);

/*
findIndex를 쓰면 return course.name === "xyz";일 때 -1,
return course.name === "a";일 때 0을 반환한다.
*/
const course2 = courses.findIndex(function(course) {
  return course.name === "a";
});

console.log(course2);
