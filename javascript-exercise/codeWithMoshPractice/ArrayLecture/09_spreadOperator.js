const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);

// all it's elements are spread individually.
const combined = [...first, "a", ...second, "b"];

console.log(combined);

//slice method without any arguments -> return a copy of the original array.
//spread를 사용하면 array 안의 모든 요소를 새로운 array에 copy할 수 있다.
const copy = combined.slice();
console.log(copy);

const copy1 = [...combined];
console.log(copy1);
