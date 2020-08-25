const first = [1, 2, 3];
const second = [4, 5, 6];

//return a new array which is combination of the first and second array.
const combined = first.concat(second); //[1,2,3,4,5,6]

//to pass 0 base index for the start, and end number
const slice1 = combined.slice(2, 4); //[3,4]
const slice2 = combined.slice(2); //[3,4,5,6]
const slice3 = combined.slice(); //[1,2,3,4,5,6] -> copy original array

console.log(combined);
console.log(slice1);
console.log(slice2);
console.log(slice3);
