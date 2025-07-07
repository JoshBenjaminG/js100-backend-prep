let name = "Victor";

function greeterJs() {
  console.log(`Good morning, ${name}`);
  console.log(`Good afternoon, ${name}`);
  console.log(`Good night, ${name}`);
}

greeterJs();

let age = 28;

function calcAge(years) {
  let futureAge = age + years;
  console.log (`You will be ${futureAge} years old in ${years} years.`)
}

calcAge(10);
calcAge(20);
calcAge(20);