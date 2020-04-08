/*map method -> with this method we cam map 
each item in the array to something else.*/
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);
const items = filtered.map(n => "<li>" + n + "</li>");
const objItems = filtered.map(n => ({ value: n }));

console.log(objItems);

const html = "<ul>" + items.join("") + "</ul>";

console.log(items);
console.log(html);

//map,filter -> they don't modify the original array. return a new array.
//chaining -> we can call them one after another in a chain.
//calling 1 method, that method returns some result.
numbers
  .filter(num => num >= 0)
  .map(num => ({ value: num }));

//convention -> put each method call on a separate line.
const itemsMultiple = numbers
  .filter(num => num >= 0)
  .map(num => ({ value: num }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);

console.log(itemsMultiple);
