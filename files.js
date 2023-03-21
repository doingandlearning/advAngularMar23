const fs = require("fs");
const timers = require("timers/promises");
// Callback Hell

// ES2015 -> ES6

// Promises

// Guarantee of some sort - to return something ...
// Returns one value and then stops
// Eager
//

// Waiter ...
//  ... Promise ... pending
//       	... reject
//        ... resolve  (settled states)

// Promise.race([
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 2000);
//   }),
//   new Promise((resolve) => {
//     setTimeout(() => resolve("I came second but am first"), 500);
//   }),
// ])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ES2017 - ES8
// async/await

async function doSomething() {
  const response = await timers.setTimeout(1000, "This is the response");
  console.log(response);
  return "I am a promise really!";
}

console.log(typeof doSomething);
doSomething().then((data) => console.log(data));

// ES2020

// AbortController
// signal ... abort()

// Observables
