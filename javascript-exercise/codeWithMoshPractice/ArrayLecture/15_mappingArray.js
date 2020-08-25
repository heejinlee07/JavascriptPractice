/*map method -> with this method we cam map 
each item in the array to something else.*/
const numbers = [1, -1, 2, 3];

//numbers배열에서 0보다 크거나 같은 숫자만 필터한다. [1,2,3]
const filtered = numbers.filter((n) => n >= 0);

//filter한 숫자 [1,2,3]의 각 요소를 확인하여 새로운 배열 반환
const items = filtered.map((n) => "<li>" + n + "</li>");

/**
 * TODO:mapping these numbers to strings.
 * join을 사용하여 배열을 스트링으로 만든다.
 * const html = items.join("");
 */
const html = "<ul>" + items.join("") + "</ul>";
console.log(html);

//TODO:mapping these numbers to objects.

const complexObjItems = filtered.map((n) => {
  const obj = { value: n };
  return obj;
});

console.log(complexObjItems);

/**
 * complexObjItems처럼 map을 쓰면 복잡하고,
 * 굳이 변수에 담을 필요 없으니
 * 아래와 같이 간단하게 표기할 수 있다.
 */

const objItems = filtered.map((n) => ({ value: n }));
console.log(objItems);

/**
 * REMIND: map,filter -> they don't modify the original array. return a new array.
 * chaining -> we can call them one after another in a chain.
 * calling 1 method, that method returns some result.
 */

numbers
  .filter((num) => num >= 0)
  .map((num) => ({ value: num }));

//convention -> put each method call on a separate line.
const itemsChaining = numbers
  .filter((num) => num >= 0)
  .map((num) => ({ value: num }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(itemsChaining);
