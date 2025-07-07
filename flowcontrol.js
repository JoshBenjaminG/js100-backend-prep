false || (true && false); //false
true || (1 + 2); //true
(1 + 2) || true; //true
true && (1 + 2); //true
false && (1 + 2); //false
(1 + 2) && true; //true
(32 * 4) >= 129; //false
false !== !true; //false
true === 4; //true
false === (847 === '847'); //true
false === (847 == '847'); //false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; //?

function evenOrOdd(num) {
  if (Number.isInteger(num)) {
  if(num % 2 == 0) {
    console.log(`${num} is even!`);
  } else {
    console.log(`${num} is odd.`);
  }
  } else {
    console.log(`${num} is not a number.`);
  }
}

// evenOrOdd(2);
// evenOrOdd(3);
// evenOrOdd("3");

function allCaps(word) {
  if (word.length > 10) {
    console.log(word.toUpperCase());
  } else {
    console.log(word);
  }
}

// allCaps("small");
// allCaps("largewordinsertedhere");

function range(arg) {
  if (arg >= 0 && arg <= 50) {
    console.log(`${arg} is greater than 0 and less than 50`);
  }
  if (arg >= 51 && arg <= 100) {
    console.log(`${arg} is greater than 50 and less than 101`);
  } 
  if (arg > 100) {
    console.log(`${arg} is greater than 100`);
  } 
  if (arg < 0) {
    console.log(`${arg} is less than 0`);
  } 
}

// range(4);
// range(700);
// range(-45);
// range(75);