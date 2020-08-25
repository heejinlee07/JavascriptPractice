var numbers = [1, 2, 3];

/*
위의 numbers 배열의 요소에 2를 곱한 값을 담은 배열을
담기 위해 아래의 변수에 빈 배열을 저장한다.
*/

//TODO: 빈 배열을 생성한다는 것이 중요하다.
//we're using the map helper to create a brand new array.
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  console.log(doubledNumbers.push(numbers[i] * 2));
}

console.log(doubledNumbers);

//그런데 굳이 이렇게 빈 배열을 만들어서
//두 배한 숫자들을 거기다가 넣어야 하는 이유가 뭐죠?

/*
답은 바로 "avoid mutating"
만약 numbers 배열을 고치거나 cited하게 되면 mutating되거나 
데이터가 변경된다.
*/

for (var i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
  //이렇게 numbers 배열을 직접 고치거나 cited하면
  //numbers배열의 값이 변경된다.
}

console.log(numbers);
//이제 number는 [1,2,3]이 아니라 [2,4,6]이 되었다.

//map을 사용할 경우
var doubled = numbers.map(function (number) {
  return number * 2;
});
//return은 꼭 필요하다. 쓰지 않으면 null이 반환됨.

console.log(doubled);

// 결과는 for 문을 사용한 doubledNumbers와 동일하게 [2,4,6]이다.
/*
Each number in the numbers array 
is being passed into the anonymous function that we're passing in.
Whatever This function returns.
So notice I do every turn key word here is placed 
into a new array after each element has been processed

that new array is returned.
*/
