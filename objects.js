//Objects in JavaScript are also mutable by default.
// let p = {name:"Nee", age: 30};
// p.age = 31;
// console.log(p);

//Immutability with Objects
//we again use the spread operator. The spread operator makes a copy of the object by spreading it into a new object at a new address. 
let p = {name:"Nee", age: 30};
p = {...p, age: 31};
console.log(p);

//Why Is Immutability Important?
//There are several reasons that immutability is important to our everyday coding.

//Once an immutable value is set, it isn't changed. Rather a new value is created. This makes the value predictable and consistent throughout the code. So it aids in managing state throughout the application. Plus immutability is a key principle in state management frameworks, such as Redux.
//Code becomes simpler and less error-prone when data structures don't change unexpectedly. This also simplifies debugging and maintenance.
//Embracing immutability is in line with functional programming principles, leading to fewer side effects and more predictable code.





































