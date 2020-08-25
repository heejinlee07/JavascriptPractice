let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    // let a != 1 + 1;
    reject("failed");
  }
});

p.then((message) => {
  // when it succeded
  console.log("this is in the then " + message);
}).catch((message) => {
  // when it failed
  console.log("this is in the catch " + message);
});
