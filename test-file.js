//promise example
//example for resolve
// create a promise
let newPromise = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

// executes when promise is resolved successfully
newPromise
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  });

//example for reject
// create a promise
let promise = new Promise(function (resolve, reject) {
  reject("Promise rejected");
});

// executes when promise is resolved successfully
promise
  .then(function successValue() {
    console.log("promise  resolved successfully");
  })

  // executes if there is an error
  .catch(function errorValue(result) {
    console.log(result);
  });
