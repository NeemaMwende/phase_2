
//To return a value from a regular function, 
//you have to explicitly use the return keyword. Otherwise the function will return undefined.
const name = 'Angel';
function sayHello(name) {
    return 'Hello ' + name
  }

//arrow functions
const sayHello = (name) => {
    return 'Hello ' + name
  }

  //or
  const sayHello = (name) => 'Hello ' + name
  const sayHello = name => 'Hello ' + name