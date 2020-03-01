success = true;

// We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
let countAndResolve = new Promise((resolve, reject) => {
  if (success) {
    setTimeout(() => {
      resolve("Success"); // fulfilled
    }, 2000);
  } else {
    let reason = "Success is false";
    reject(reason); // reject
  }
});

countAndResolve
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
