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

//Use CSS Classes to Style Elements
//The classList property has useful properties like add, remove, toggle, and others that makes it easy to modify styles.
// .styledClass {
//     color: red;
//   }
  element.classList.add('styledClass');
//another example

//The innerHTML property reads and parses HTML markup that you pass to it. 
//This means it can read and run code in a script tag passed to it. 
//Where possible, use the innerText or textContent property to render strings. 
//But if you need to use innerHTML, be sure you're using it to insert content from trusted sources.
// Or sanitize and validate the provided content with a library like DOMPurify.

//innerHTML property, it reads both the HTML markup and the text content of the element. 
//This means when you use it to set the content of elements, you can include HTML tags, and the browser will render them correctly.

//The textContent property also ignores all HTML tags and returns only the text. Whiles innerText reads text as it is rendered on screen, 
//textContent reads text as it is in the markup. 

<nav>
  <a>Home</a>
  <a>About</a>
  <a>Contact</a>
  <a style="display: none">Pricing</a>
</nav>

// Reading content with innerHTML
const navElement = document.querySelector('nav')
console.log(navElement.innerHTML)
//displays everything as it is including the tags

// Reading content with innerText
const navElementt = document.querySelector('nav')
console.log(navElementt.innerText)
//displays the nav contents without the tags and ignores the hidden element

// Reading content with textContent
const navElemennt = document.querySelector('nav')
console.log(navElemennt.textContent)
//returns all the elements without any styling including the hidden element

//Setting content with innerHTML
h2>Programming languages </h2>
<ul class="languages-list"></ul>
const langListElement = document.querySelector('.languages-list')

// Setting or updating content with innerHTML
langListElement.innerHTML = `
  <li>JavaScript</li>
  <li>Python</li>
  <li>PHP</li>
  <li>Ruby</li>
`
//setting content with innerText
const langListElement = document.querySelector('.languages-list')

langListElement.innerText = `
  <li>JavaScript</li>
  <li>Python</li>
  <li>PHP</li>
  <li>Ruby</li>
`
//innerText ignores the html tags and prints them as they are on the screen recognizing its stylngs and whitespaces

//setting content with textContext
const langListElement = document.querySelector('.languages-list')

langListElement.textContent = `
  <li>JavaScript</li>
  <li>Python</li>
  <li>PHP</li>
  <li>Ruby</li>
`
//ignores the tags and prints everything = all text is in a single line because styling is ignored and all formatting = raw text


//The browser will run any JavaScript code you put in the HTML script tag. And it can open doors to Cross-Site Scripting (XSS)
// where attackers can inject and run malicious script in the context of your web page.
<div id="commentSection"></div>
const commentSection = document.getElementById('commentSection')

let userComment = `<img src="malicious-script.jpg" onerror="alert('Malicious Script Executed!')"> This is my comment!`;

commentSection.innerHTML = userComment;

//Write Readable Event Listeners
//The first is the event you're listening to and the second is the event handler (the function that fires when the event occurs).
//Example 1
MyElement.addEventListener('click', handleClick) 

function handleClick() { 
    // your logic goes here.. 
} 

// Example 2 ❌ 

myElement.addEventListener('click', function() { 
    // your logic goes here... 
})

//Event delegation is when you attach an event listener on a parent element to listen to events on its descendants.
// With this technique, you can reduce the number of event listeners to include in your code.
{/* <div id="parent"> 
    <button id="btn-1">1st Button</button> 
    <button id="btn-2">2nd Button</button> 
    <button id="btn-3">3rd Button</button> 
    <button id="btn-4">4th Button</button> 
    <button id="btn-5">5th Button</button> 
</div> */}

//You can add an event listener to each of the five buttons to listen to a click. Or using event delegation, you can a single event on only the parent div:

const parentElementt = document.getElementById('parent') 

parentElement.addEventListener('click', handleClick) 

function handleClick(event) { 
  alert(event.target.id) 
}

//Batch DOM Updates With Fragment
//A useful feature you can use to batch updates is the .createDocumentFragment property. It allows you to group multiple updates before inserting them into the document. This reduces reflows and makes your code more effecient.
//Example without Fragment:

const container = document.getElementById('container')
for (let i = 0; i < 1000; i++) { 
    const listItem = document.createElement('li')
    listItem.textContent = `Item ${i}`
    container.appendChild(listItem) 
}
//updates the loop 1000 times which is tiresome
//Example with fragment:

const containerr = document.getElementById('container') 
const fragment = document.createDocumentFragment()

// Add multiple list items to the fragment 
for (let i = 0; i < 1000; i++) { 
    const listItem = document.createElement('li') 
    listItem.textContent = `Item ${i}` 
    fragment.appendChild(listItem)
} 
containerr.appendChild(fragment)

// By default, when an event occurs on an element, it bubbles (propagates) through its ancestors.
//The stopPropagation method provides a way to stop the event from propagating to the parent and other ancestors.
<div id="container">
    <button id="button">Click me</button>
</div>
const containerDiv = document.getElementById('container')
const buttonElement = document.getElementById('button')

containerDiv.addEventListener('click', handleDivClick)
buttonElement.addEventListener('click', handleBtnClick)

function handleDivClick() { 
    console.log('Div clicked')
} 

function handleBtnClick(event) { 
    event.stopPropagation()
    console.log('Button clicked')
} 
//Without using the stopPropagation method, a click event on the button will also trigger a click event on the parent div. This means both event handlers will run.
//But the event.stopPropagation() line in the code will prevent the handleDivClick function from running when a user clicks the button.

//The following example uses the Jest framework to test DOM Manipulation code for adding a class to an element.

test('Adding a highlight class changes text color to red', () => {
    myElement.classList.add('highlight');
    expect(getComputedStyle(myElement).color).toBe('red');
});









