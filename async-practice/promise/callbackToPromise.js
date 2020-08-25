const userLeft = false;
const userWatchingCatMeme = false;

// watchTutorialCallback((message) => {
//   console.log("success " + message),
//     (error) => {
//       console.log(error.name + " " + error.message);
//     };
// });

//calling the callback
// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "user watching cat meme",
//       message: "webDevSimplified < cat",
//     });
//   } else {
//     callback("thumbs up and subscribe");
//   }
// }

function watchTutorialPromise(resolve, reject) {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "user watching cat meme",
        message: "webDevSimplified < cat",
      });
    } else {
      resolve("thumbs up and subscribe");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log("success " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
