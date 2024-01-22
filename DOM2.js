//What can DOM do?
//Change and remove existing elements in the DOM.
//Create and add new elements to the page.
//Change the styles for elements.
//Add event listeners to the elements to make them interactive.

//The Document part refers to the webpage you see in the browser. Specifically, the HTML Document which handles the structure of the page's content.
//Object means the elements like images, headers, and paragraphs are treated like objects. 
//The Model in DOM means it's a representation or copy of the HTML document as a hierarchical tree.

//How to Select DOM Elements
//Simple markup with a header element and four paragraphs
//<h1 id="page-title">Phonebook</h1> 
{/* <p class="family">Marie</p>
<p class="family">Jose</p>
<p class="work">Anne</p>
<p class="work">Joan</p> */}
//1. getElementById eg 
const titleElement = document.getElementById("page-title")
console.log(titleElement);
//If there's no element in the DOM with the given id, the getElementById() method will return null.
//2.getElementByClassName eg
const famContacts = document.getElementsByClassName("family")
console.log(famContacts)
console.log(famContacts[0]) 
//This will get the first element in the HTML collection, which is the paragraph with the name Marie.

























































