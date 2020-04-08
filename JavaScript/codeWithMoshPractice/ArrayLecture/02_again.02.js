const numbers = [1, 2, 3, 4];

console.log(numbers.includes(2));

function includes(array, searchElement) {
  for (let value of array) {
    if (searchElement === value) {
      return true;
    }
  }
}

/*function includes(array, searchElement){
  for(let element of array )
    if(element === searchElement)  
      return true;
  return false;
} 여기서 return false꼭 필요한가?
*/
