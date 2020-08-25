function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`making request to ${location}`);
    if (location === "google") {
      resolve("google says hi");
    } else {
      reject("we can only talk to google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`extra information + ${response}`);
  });
}

makeRequest("google")
  .then((response) => {
    console.log("response received");
    return processRequest(response);
  })
  .then((processResponse) => {
    console.log(processResponse);
  })
  .catch((err) => {
    console.log(err);
  });

//async-await
async function dowork() {
  const response = await makeRequest("google");
  console.log("response received");
  const processResponse = await processRequest(response);
  console.log(processResponse);
}
dowork();

//async-await error handling
async function dowork() {
  try {
    const response = await makeRequest("google");
    console.log("response received");
    const processResponse = await processRequest(response);
    console.log(processResponse);
  } catch (err) {
    console.log(err);
  }
}
dowork();
