/**
 * REMIND:
 * rest operator: is used to kind of gather together variables.
 * spread operator: is used to kind of flatten or spread them out.
 */

const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];
const fallColors = ["fire red", "fall orange"];

console.log(defaultColors.concat(userFavoriteColors));

//spread operator
console.log([...fallColors, ...defaultColors, ...userFavoriteColors]);

/**
 * NOTE:
 * 1. created a new array.
 * 2. Then inside of it we referenced an existing array and in front of it put a dot dot dot.
 * negating or flattening out this entire array here.
 */

/**
 * best use cases:
 * whenever I want to take some existing list of items or
 * you know create a new list and then add in some other way on top of it.
 */
console.log(["blue", ...fallColors, ...defaultColors, ...userFavoriteColors]);

// mix and match the spread and rest operators
function validateShoppingList(...items) {
  if (items.indexOf("milk") < 0) {
    //indexOf의 값이 없으면 -1을 반환
    return ["milk", ...items];
  }
  return items;
}

console.log(validateShoppingList("oranges", "bread", "eggs"));
