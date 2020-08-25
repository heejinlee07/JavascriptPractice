const companies = ["Google", "Facebook", "Uber"];

// const [name, name2, name3, name4] = companies;
// console.log(name);
// console.log(name2);
// console.log(name3);
// console.log(name4); //undefined

// // undefined긴 하지만 값에 접근할 수 있다.
// // 에러가 발생하지 않는다.
// console.log(typeof name4);

// 배열의 요소에 접근하려고 하는 행위가 보다 명확하게 드러남
// const [name] = companies;
// const firstCompany = companies[0];

/*
REMIND:
const { name } = companies;
const [ name ] = companies;
프로퍼티를 디스트럭처링하고 싶을 때는 {}
Element를 디스트럭처렁 하고 싶을 때는 [] 
*/

// 디스트럭처링과 rest(...)는 같이 쓸 수 있다.
const [name, name2, ...rest] = companies;
console.log(name);
console.log(name2);
console.log(rest);
