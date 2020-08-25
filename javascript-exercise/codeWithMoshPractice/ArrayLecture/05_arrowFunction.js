const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" }
];

const course = courses.find(course => {
  return course.name === "a";
});

/* 
parameter가 1개 일때는 () 생략가능
parameter가 없을 때는 () 입력
코드가 한 줄일 때는 아래와 같이 더 간략하게 작성가능

const course = courses.find(course => course.name === "a");
*/
console.log(course);
