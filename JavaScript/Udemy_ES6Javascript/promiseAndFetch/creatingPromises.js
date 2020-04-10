//create promise

/*
promise는 보통 AJAX request에 많이 쓰는데,
promise와 AJAX가 dependent인 것은 아니다.
*/

promise = new Promise((resolve, reject) => {
  // resolve();
  reject();
});

promise
  .then(() => {
    console.log("finally finished!");
  })
  .then(() => {
    console.log("i was also ran!");
  });

//이렇게 더 간결하게 작성할 수 있다.
promise
  .then(() => console.log("finally finished!"))
  .then(() => console.log("i was also ran!"))
  .catch(() => console.log("uh oh!"));

/*
writing any code inseide promise that I want to occur on or to execute 
only after the promise has been resolved.
*/

/*
성공하면 promise.then의 내용이 console에 출력되고,
실패하면 promose.catch의 내용이 출력된다.
*/

//then으로 연결하여 promise 체인을 만들 수 있다.
