/*
adding new elements
finding elements
removing elements
spliting arrays
combining arrays
*/

//adding elements
const numbers = [3, 4]; //const니까 number = [];와 같이 재할당 못함.
//하지만 이 배열의 content를 추가하거나 삭제하는 것은 가능하다.

//end
numbers.push(5, 6); //1개 이상의 인수 전달
//beginning
numbers.unshift(1, 2);
//middle
numbers.splice(2, 0, "a", "b"); //given position, add new elements or remove existing elements.
console.log(numbers);
// (start position, delete count, item to adds)
