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
// primitives are immutable and can only be changed through appending texts (concatenation +=)
let greet = "Hello";
greet += ", World";  
console.log(greet);

//JavaScript Arrays are Mutable(can be changed)
// A variable doesn't store an array – it stores the memory address of the array.
let ages = [42, 22, 35];
ages.push(8);  
console.log(ages);
ages.pop(22);
ages.pop();
console.log(ages);

//embracing immutability
//By using the spread operator, we achieve immutability.
let years = [42, 22, 35];
years = [...years, 8];  
console.log(years);

//In addition to the spread operator, many of the array methods also create a new array and therefore treat an array as immutable. 
//Map creates a new array from the existing array, mapping each element using a function we provide.
ages.map(x => x + 1);
//a map function 
// Example array
const numbers = [1, 2, 3, 4, 5];

// Using map to square each number
// const squaredNumbers = numbers.map(function(number) {
//   return number * number;
// });
// console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]

//the same with arrow functions
// const numbers = [1, 2, 3, 4, 5];

// Using arrow function for brevity
const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]

// Example array of strings
const fruits = ['apple', 'banana', 'orange', 'kiwi'];

// Using map to convert each string to uppercase
const uppercasedFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});

console.log(uppercasedFruits);
// Output: ['APPLE', 'BANANA', 'ORANGE', 'KIWI']

//3.Push modifies the original array in place, mutating the array.
ages.push(8);
//Filter creates a new array with items matching the defined criteria. It leaves the original array unchanged.
ages.filter(x => x > 21);
// Example array of numbers
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to get only the odd numbers
const oddNumbers = numberss.filter(function(number) {
  return number % 2 !== 0;
});

console.log(oddNumbers);
// Output: [1, 3, 5, 7, 9]
// 4. Sort sorts the array elements in place, thereby mutating the array.
ages.sort();
// Example array of numbers
const numberrs = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Using sort to arrange numbers in ascending order
const sortedNumbers = numberrs.sort(function(a, b) {
  return a - b;
});

console.log(sortedNumbers);
// Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// Using sort to arrange numbers in descending order
const sortedNumbersDescendingg = numbers.sort(function(a, b) {
    return b - a;
  });
  
  console.log(sortedNumbersDescending);
  // Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
  // or
// Using arrow function for brevity
const sorteddNumbers = numbers.sort((a, b) => a - b);
const sortedNumbersDescending = numbers.sort((a, b) => b - a);

//Slice creates a new array from a portion of an existing array. Here we copy the original array elements starting at index 1 through index 3 to a new array.
ages.slice(1, 3);

// 5 slice function
// Example array
const fruitss = ['apple', 'banana', 'orange', 'kiwi', 'mango'];

// Using slice to create a new array with a portion of the original array
const slicedFruits = fruitss.slice(1, 4);

console.log(slicedFruits);
// Output: ['banana', 'orange', 'kiwi']
//or 
// Using negative indices with slice
const slicedFruitsNegative = fruits.slice(-3, -1);

console.log(slicedFruitsNegative);
// Output: ['orange', 'kiwi']

//Splice changes the contents of an array in place, adding, removing, or replacing existing elements. 
ages.splice(2, 1, 18);



