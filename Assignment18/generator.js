

// ES6 introduced a new way of working with functions and iterators in the form of Generators (or generator functions). 


// A generator is a function that can stop midway and then continue from where it stopped.

function* generatorFunction() { // Line 1
  console.log('This will be executed first.');
  yield 'Hello, ';   // Line 2
  console.log('I will be printed after the pause');  
  yield 'World!';
}
const generatorObject = generatorFunction(); // Line 3
console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 5
console.log(generatorObject.next().value); // Line 6

// A generator function always returns a generator object. 

// The generator object is an iterator. 

// So you can use it in for-of loops or other functions accepting an iterable.

function* multiplying(num1, num2) { // Line 1
  console.log('This will be executed first.');
  yield `${num1*num2}`;   // Line 2
  // console.log('I will be printed after the pause');  
  // yield 'World!';
}
const multiplyingObject = multiplying(2,2); // Line 3
console.log(multiplyingObject.next().value); // Line 4

//infinite series of number
function* natural() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

// for (let num of natural()) {
//   console.log(num);
// }

//generator throw an exception
function* generateException() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log('Error caught!');
    }
  }
}

const g = generateException();
g.next();
// { value: 42, done: false }
g.throw(new Error('Something went wrong'));
// "Error caught!"
// { value: 42, done: false }