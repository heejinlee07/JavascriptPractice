//finding elements(primitives)

const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1)); //array 안에 없는 'a'를 찾으면 -1이 반환됨.
console.log(numbers.indexOf(1, 2)); //3
//2번째 인수는 검색하고자 하는 지점을 의미, index 1에서 시작해서 2에서 검색한다.

console.log(numbers.lastIndexOf(1)); //return the last index of the given element or -1 if if doesn't exist.

console.log(numbers.indexOf(1) !== -1); //true가 반환되면 배열 안에 이 요소가 있다는 뜻.
console.log(numbers.includes(1)); //위의 식은 못생겼으니까 이렇게 쓴다. 위의 코드와 동일하다.

//모든 메소드의 두번째 인수는 옵션.
