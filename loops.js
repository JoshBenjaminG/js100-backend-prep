function calcAge() {
  let rlSync = require('readline-sync');
  let age = Number(rlSync.question("What's your age?\n"));
  for (let i = 10; i < 40; i+=10) {
    console.log(`In ${i} years you will be ${age + i} years old.`)
  }
}

// calcAge();

function factor(num) {
  for(i = 1; i <= num; i++) {
    let product = i *= i;
    console.log(product);
  }
}

factor(8);

// 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8