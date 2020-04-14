// create an array of numbers
var numbers = [1, 2, 3, 4, 5];

//create a variable to hold the sum
var sum = 0;

function adder(number) {
  sum += number;
}

//loop over the array, incrementing the sum variable
numbers.forEach(adder);

//adder()이런 식으로 사용하지 않는다.
//위에 선언된 함수의 참조를 전달할 뿐이다.

/* 
forEach를 사용해서 numbers 안에 있는 element를 확인한다.
배열 안에 있는 각각의 요소를 호출할 것.
*/

//print the sum variable
console.log(sum);

//TODO: WHY USE forEach?

/**
 * http request 요청과 같이 서버에 요청할 때 유용하다.
 * Let's assume that clicking this checkbox here adds an e-mail to
 * some like e-mails array like you know e-mails to be deleted or something like that.
 * Then whenever a user clicks on the button we can run e-mails dot for each.
 * So every e-mail that's in this array we should iterate over it
 * and call this function delete e-mail passing an e-mail.
 * TODO: delete all salected
 * emails.forEach(function(email){
 *  deleteEmail(email)
 * })
 */
