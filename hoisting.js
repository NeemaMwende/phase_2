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

//When invoking or calling a method on an object
//While the method with the regular function logs the object to the console, the one with the arrow function logs the global window object instead.
const myObject = {
    regularExample: function() {
      console.log("REGULAR: ", this)
    },
      
    arrowExample: () => {
      console.log("ARROW: ", this)
    }
  }
      
  myObject.regularExample()
  myObject.arrowExample()


  //How to Use Functions as Constructors
  function RegularFuncBird(name, color) {
    this.name = name
    this.species = color
    console.log(this)
  } 
//   const ArrowFuncBird = (name, color) => {
//     this.name = name
//     this.color = color
//     console.log(this)
//   } 
  new RegularFuncBird("Parrot", "blue") 
//   new ArrowFuncBird("Parrot", "blue")

//For arrow functions, you cannot use them as constructors. 
//This is because the value of this in arrow functions is lexically scoped – that is, determined by the surrounding execution context. 
//This behaviour does not make them suitable to be used as constructors.



