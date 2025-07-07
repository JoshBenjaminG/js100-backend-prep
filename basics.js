console.log('Josh ' + 'Gage');

console.log(typeof(true));

console.log(typeof(false));

console.log(typeof(1.5));

console.log(typeof(2));

console.log(typeof(undefined));

console.log(typeof({ foo: 'bar' }));

//When JS sees the + sign and a string, it performs string concatonation.

console.log('5' + 10);

console.log(Number('5') + 10);

//The value of 5 + 10 is 15.

console.log(`The value of 5 + 10 is ${15}`);

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?

let names = ['josh', 'mason', 'dan', 'scott'];

console.log(names);

//'foo' === 'Foo' is false

//parseInt('3.1415') is 3

//'12' < '9' is false