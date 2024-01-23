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

//The hasAttribute Method
const imageEleement = document.querySelector('img')
console.log("HEIGHT", imageEleement.hasAttribute('height')) //returns true
console.log("WIDTH", imageEleement.hasAttribute('width')) //false

//How to Change the Styles on DOM Elements
//You can use the .style property or you can use classes.
//The .style property allows you to set styles directly as inline styles for elements. This means it overrides the styles you have in your CSS stylesheet.
{/* <h1>Styling elements with JavaScript</h1> */}
const header = document.querySelector('h1')
console.log(header.style) // The console.log prints the CSS style declarations with all the CSS properties for that element.

//example one
//<h1>I love JavaScript</h1>
const paragraph = document.querySelector('h1')
paragraph.style.color = 'white'
paragraph.style.backgroundColor = 'green' // background-color becomes backgroundColor.
//You can also delete a style on an element by setting the value of the property to an empty string.
element.style.propertyName = ""


//Setting Styles with Classes
//With classes, you can create styles once and apply it to different elements. This helps make your code become more maintainable.
{/* <p class="food rice-dish">Jollof rice</p> */}
const jollofParagraph = document.querySelector('p')
console.log(jollofParagraph.className) //food rice-dish
jollofParagraph.className = 'favorite'
console.log(jollofParagraph.className) //favorite

//The classList Property = With the classList property, you can add and remove classes. 
//You can also toggle classes, replace existing class values with new ones, and even check if the class contains a specific value.
{/* <p class="food">Jollof rice</p> */}
const jollofParagraph = document.querySelector('p')
console.log(jollofParagraph.classList) //Shows the current classList with only one value

//Adding Classes with classList.add()
jollofParagraph.classList.add('fav', 'tasty')
console.log(jollofParagraph.classList) //The code adds two new classes fav and tasty to the class list.

//Removing Classes With classList.remove()
jollofParagraph.classList.remove('tasty')
console.log(jollofParagraph.classList) //The code removes the class tasty from the class list.

//Replacing Classes with classList.replace()
jollofParagraph.classList.replace('fav', 'favorite')
console.log(jollofParagraph.classList) // replaces the fav class with favourite class

//Check the Presence of a Class with classList.contains()
const isFavorite = jollofParagraph.classList.contains('favorite')
const isSoup = jollofParagraph.classList.contains('soup')
console.log("Contains favorite: ", isFavorite) //true
console.log("Contains soup: ", isSoup) //false

//Toggling a Class with the classList.toggle()
//When you use the toggle property, it first checks if the class exists. If it exists, it will remove it. And if it doesn't exist, it will add it.
jollofParagraph.classList.toggle('favorite')
console.log(jollofParagraph.classList)

jollofParagraph.classList.toggle('favorite')
console.log(jollofParagraph.classList)

jollofParagraph.classList.toggle('favorite')
console.log(jollofParagraph.classList)

// The first time the toggle runs, favorite exists in the class list. So, the toggle removes it.
// The second time the toggle runs, favorite doesn't exist so the toggle adds favorite to the class list.
// The next time the toggle runs, favorite now exists again. So it removes it from the class list.

//How to Traverse the DOM = to move between the different elements/nodes within the HTML document. 
//Nodes are the building blocks of the DOM. They represents different components in the HTML structure.
//Elements are a specific type of node, but not all nodes are elements. Other types of content like attributes of elements, text content, and comments within the code are nodes too. But they are not elements.
//An element is a specific type of node that defines the structure of the document's content. Think of elements as the familiar HTML tags you use. Examples include <div>, <p>, and <ul>. Each element can consist of attributes, text content, and other nested elements.

//Selecting a Parent with parentNode vs parentElement
{/* <div class="container">
    <p class="full-text">
        <i id="italics">Some italicized text</i>
    </p>
  </div> */}
const italicizedText = document.getElementById('italics')
console.log(italicizedText.parentNode)
console.log(italicizedText.parentNode.parentNode) // to get the parent of the parent

//Selecting Elements with childNodes vs children
//childNodes: returns a NodeList of all the child nodes within the selected elements. It will include elements and non-element nodes like text nodes, comment nodes, and so on.
//.children: returns an HTML collection of only the child elements (element nodes) of the selected objects. It will not include any non-element nodes like texts or comments.
//example
{/* <div id="container">
    A text node
    <p>Some paragraph</p>
    <!-- This is a comment -->
    <span>Span Element</span>
  </div> */}
//The code above has only 2 child elements (element nodes): the paragraph and the span. But there are other elements too – a text node and a comment:
const container = document.getElementById('container');
const containerChildNodes = container.childNodes;
const containerChildren = container.children;
console.log(containerChildNodes);
console.log(containerChildren);
//The  childNodes will return all the child nodes (both elements and non-elements). It also includes the whitespaces between elements as text nodes.
//The children will only return the child elements (the paragraph and the span).

//Selecting the First or Last Child/Element
//firstChild: Selects only the first child node of the parent element.
// lastChild: Selects only the last child node of the parent element.
// firstElementChild: Selects only the first child element of the parent.
// lastElementChild: Selects only the last child element of the parent.

//example
{/* <div id="container">
A text node
<p>Some paragraph</p>
<!-- This is a comment -->
<span>Span Element</span>
</div> */}
const containerr = document.getElementById('container');
console.log("FIRST CHILD:", containerr.firstChild)
console.log("LAST CHILD:", containerr.lastChild)
console.log("FIRST ELEMENT: ", containerr.firstElementChild)
console.log("LAST ELEMENT:", containerr.lastElementChild)
//Note how firstChild returns the first text node but the firstElementChild returns the first paragraph instead. This means it ignored the text node which comes before the paragraph.
//And also note how the lastChild returns a text node – even though from the markup, it looks like there's nothing after the span. That is because the lastChild property considers the linebreak/whitespace between the closing tag of the span and the closing tag of the div elements as a node.












































