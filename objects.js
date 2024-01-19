//Objects in JavaScript are also mutable by default.
// let p = {name:"Nee", age: 30};
// p.age = 31;
// console.log(p);

//Immutability with Objects
//we again use the spread operator. The spread operator makes a copy of the object by spreading it into a new object at a new address. 
let p = {name:"Nee", age: 30};
p = {...p, age: 31};
console.log(p);







































