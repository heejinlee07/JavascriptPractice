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
sum;
function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" },
  ];

  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
}

function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" },
  ];

  posts.forEach(function (post) {
    savePost(post);
  });
}
