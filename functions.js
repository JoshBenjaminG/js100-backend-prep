// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar); should log 1

 function calc() {
  let rlSync = require('readline-sync');
  let num1 = rlSync.question("What's the first number?\n");
  let num2 = rlSync.question("What's the second number?\n");
  let product = num1 * num2;
  console.log(`${num1} times ${num2} is ${product}`);
}

calc();

function scream(words) {
  words = words + '!!!!';
  console.log(words);
  return;
}

// scream('Yipeee');

// function scream(words) {
//   return words + '!!!!';
// }

// scream('Yipeee');

//declaration name       params
function multiplyNumbers(num1, num2, num3) {
  //body
  let result = num1 * num2 * num3;
  return result;
}
//invocation                 args
let product = multiplyNumbers(2, 3, 4);