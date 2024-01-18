//in regular functions
regularFunction()

function regularFunction() {
  console.log("This is a regular function.")
}

//Hoisting in arrow functions dont work
// arrowFunction()

// const arrowFunction = () => {
//   console.log("This is an arrow function.")
// }

//For regular functions, a simple function call sets the this value to the window object (or to undefined if you're using the "strict mode"):
function myRegularFunction() {
    console.log(this)
  }
      
  myRegularFunction()
//or
  "use strict"

  function myFunction() {
    console.log(this)
  }
      
  myFunction() // udefined
  
// this in arror functions
  const myArrowFunction = () => {
    console.log(this);
  };
  
  myArrowFunction()





