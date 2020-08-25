/**
 * NOTE:
 * how promises are used to solve the issue of asynchronous code.
 * the trick to dealing with asynchronous code is through
 *
 * how we call resolve and reject and most importantly
 * deciding when we want to call them.
 */

/**
 * NOTE:
 * inside of a promise specifically or especially I should say with Ajax requests
 * everything still falls back to the browser and the browser telling us when some long running process
 * like in the case of an Ajax request has been completed.
 */

promise = new Promise((resolve, reject) => {
  var request = new XHTMLRequest();
  //make request
  request.onload = () => {
    resolve();
  };
  /*
  setTimeout(() => {
    resolve();
  }, 3000);
  */
});

promise
  .then(() => console.log("finally finished!"))
  .then(() => console.log("i was also ran!"))
  .catch(() => console.log("uh oh!"));
