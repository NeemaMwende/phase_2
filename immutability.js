// //Immutable basically means something that cannot be changed. In programming,
// // immutable is used to describe a value that cannot be changed after it's been set.
// // Import stylesheets
// import './style.css';

// // Write JavaScript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>Open the console to see results</h1>`;

// class Person {
//   //_name = "Nee";
//   //_name = ["Nee", "Ra"];
//   _name = { first: "Nee", middle: "L" };
  
//   get name() {
//     return this._name;
//   }
  
//   set name(value) {
//     console.log('In setter', value);
//     this._name = value;
//   }
// }

// let p = new Person();
// //p.name = "Ra";                        // Setter executes
// //p.name.push("Lee");                   // Setter doesn't execute
// //p.name = [...p.name, "Lee"];          // Setter executes
// //p.name.middle = "Lee";                // Setter doesn't execute
// p.name = { ...p.name, middle: "Lee" };  // Setter executes

// //"primitives" refer to the most basic data types that are not composed of other data types.
// // These data types are fundamental building blocks used to represent simple values. 

let greet = "Hello";
greet += ", World";  
console.log(greet);
































