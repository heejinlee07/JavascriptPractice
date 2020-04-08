const numbers = [1, 2, 3, 4];

//End
numbers.push(); //add something end of array

//remove the last element
const last = numbers.pop();
console.log(numbers); // [1,2,3]
console.log(last); // 4

//Biginning
numbers.unshift(); //add something at the beginning of an array.

// remove at the biginning of an array.
const first = numbers.shift();
console.log(first); //1
console.log(numbers); //[2,3]

//Middle
//removing an element somewhere in the middle.
const numbers2 = [1, 2, 3, 4];

numbers2.splice(1, 2); //[2,3]
console.log(numbers2); //[1,4]

/* 
삭제하고 싶은 element의 index를 입력.
(index 시작점, 시작점부터 삭제하고 싶은 index까지)
*/
