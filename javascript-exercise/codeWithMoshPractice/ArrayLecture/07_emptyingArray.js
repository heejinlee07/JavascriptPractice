//how can we remove all the elements in this array.

let numbers = [1, 2, 3, 4];
let another = numbers;
/* 
하지만 이렇게 another라는 변수에 numbers를 할당하면
another도 [1,2,3,4]를 가리키게 되니까 [1,2,3,4]는
가비지 컬렉팅 되지 않는다. 이 상태에서 재할당한
numbers는 메모리 상의 새로운 object를 가리키게 된다.
*/

/*solution 1 -> reassign this to a new array. 
original object에 대한 참조가 없을 때.*/
/* 가장 간결하게 emptying array하는 방법이지만 
여러 개의 참조를 가지고 있을 때는 사용할 수 없다.*/

numbers = [];
console.log(numbers);

/* 
하지만 재할당하면 오리지널 object인 [1,2,3,4]는 아직 메모리 상에 
남아 있으나 아무도 참조하지 않으므로 가비지 컬렉팅된다.*/

/*solution 2 -> original array에 대한 참조가 여러 개 일때.
length property를 0으로 set한다.*/
numbers.length = 0;
console.log(numbers); //[]
console.log(another); //[]

//solution 3 -> splice 사용
numbers.splice(0, numbers.length);

//solution 4 -> pop 사용
//그러나 만약 백만줄 정도의 코드를 pop한다면 성능저하이슈가 있으니 추천하지 않음.
while (numbers.length > 0) numbers.pop();

// mosh는 solution1 또는 solution2를 추천한다.
