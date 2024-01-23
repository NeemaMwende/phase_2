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
//A simple way to create an array from the HTML collection is to use the spread operator, like this:
let famContactsArray = [...famContacts]
famContactsArray.forEach(element => console.log(element))
//The browser will throw an error if you try to apply an array method like map to the HTML collection without first creating an array from it.
//3. getElementsByTagName
getElementByTagName('p') 
const allContacts = document.getElementsByTagName('p')
console.log(allContacts)
//You can create an array from the HTML collection and use any of the array methods on it.
let allContactsArray = [...allContacts]
allContactsArray.map(element => console.log(element))


//querySelector = The querySelector method works like how CSS selectors work.
const firstWorkContact = document.querySelector('.work')
console.log(firstWorkContact)
//The example above returns only the first element with a class of work and ignores the rest.
//<div>
{/* <button>First button</button>
<button>Second button</button>
<button>Third button</button>
<button>Fourth button</button>
</div> */}
const thirdBtn = document.querySelector('div button:nth-child(3)')
console.log(thirdBtn)
//But what if you want to select all four button elements and not only the first one? Then you could use the querySelectorAll method instead.
const allBtns = document.querySelectorAll('button')
console.log(allBtns)
//Note: querySelectorAll returns a NodeList. A NodeList is slightly different from an HTML collection. You don't need to convert it to an array to apply a method like forEach on it.
allBtns.forEach(btn => console.log(btn))
//But you still cannot apply array methods like map, filter, and others on a NodeList. You will need to first create an array from it.


//How to Change the Content of DOM Elements
//1.The innerHTML Property
{/* <p id="topic">JS array methods</p>
<p id="first-method">map</p>
<p id="second-method">filter</p> */}
const topicElement = document.querySelector('#topic')
console.log(topicElement.innerHTML)
const topicElementt = document.querySelector('#topic')
topicElementt.innerHTML = "JavaScript array methods"
topicElement.innerHTML = "<b>JavaScript</b> array methods"


//How to Work with Attributes of DOM Elements
//attribute is made up of a name and a value (though there are exceptions where only a name is present).
//The getAttribute Method = Like the name suggests, you can use this method to get the value of an existing attribute on an element.
{/* <img src="image.jpg" alt="An example image"> */}
const imageElementt = document.querySelector('img')
console.log(imageElementt.getAttribute('src'))

//The setAttribute Method = This is used to set or change the attribute of an element. 
{/* <img src="image.jpg" alt="An example image"> */}
const imageElement = document.querySelector('img')
console.log("BEFORE:", imageElement.getAttribute('src'))
imageElement.setAttribute('src', 'new-image.jpg')
console.log("AFTER:", imageElement.getAttribute('src'))

const imageElemennt = document.querySelector('img')
console.log("BEFORE:", imageElemennt.getAttribute('height'))
imageElement.setAttribute('height', '200')
console.log("AFTER:", imageElement.getAttribute('height'))

//The removeAttribute Method
const imageEllement = document.querySelector('img')
console.log("BEFORE:", imageEllement.getAttribute('height')) // gets the height 200
imageElement.removeAttribute('height', '200')
console.log("AFTER:", imageEllement.getAttribute('height')) // returns null


















