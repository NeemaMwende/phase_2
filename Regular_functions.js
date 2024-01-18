
//To return a value from a regular function, 
//you have to explicitly use the return keyword. Otherwise the function will return undefined.
const name = 'Angel';
function sayHello(name) {
    return 'Hello ' + name
  }

//arrow functions
// const sayHello = (name) => {
//     return 'Hello ' + name
//   }

//   //or
//   const sayHello = (name) => 'Hello ' + name
//   const sayHello = name => 'Hello ' + name

  
//to access with regular functions = arguments (not available in arrow functions instead = ...args)
function logNumbers(num1, num2) {
    console.log(arguments)
  }
  
  logNumbers(8, 24)

  function logNumbers(...args) {
    console.log(args)
  }
  
  logNumbers(8, 24, 34, 89, 45)



  //duplicate parameters in regular functions
//   "use scrict"
  function exampleFunction(a, b, a) {
    console.log(a, b)
  }
  exampleFunction("first", "second", "third");

//in arrow functions = running the above brings an error = no duplicates here
// const exampleFunction = (a, b) => {
//     console.log(a, b)
//   }
//   exampleFunction("first", "second");

