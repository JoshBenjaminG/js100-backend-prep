
function greet() {
  let rlSync = require('readline-sync');
  let firstName = rlSync.question("What's your first name?\n");
  let lastName = rlSync.question("What's your last name?\n");
  console.log(`Hello, ${firstName + ' ' + lastName}!`)
}

// greet();

function calcAge() {
  let rlSync = require('readline-sync');
  let age = Number(rlSync.question("What's your age?\n"));
  console.log(`In 10 years you will be ${age + 10} years old.`)
  console.log(`In 10 years you will be ${age + 20} years old.`)
  console.log(`In 10 years you will be ${age + 30} years old.`)
}

calcAge();