// Document Object Model
//The DOMContentLoaded event is fired when the HTML document is fully loaded.
//Using this event ensures that your DOM manipulation code runs only after the document is fully loaded.
document.addEventListener('DOMContentLoaded', function() {
    // Your DOM manipulation code goes here...
  })

//Cache Selected Elements
//When you have frequently used elements, querying the DOM for the same element anytime over and over is inefficient.
// It's better to query the DOM once and store the result in variables.
const cachedElement = document.getElementById('exampleId')

//Query Parent Elements Instead of Document
// {/* <div id="parent">
//     <p id="child">Example paragraph</p>
// </div> */}

const parentElement = document.getElementById('parent')

// Options 1: Querying entire document ❌
const childFromDocument = document.getElementById('child') 

// Options 2: Query the parent element ✅
const childFromParent = document.querySelector('#child')



































































