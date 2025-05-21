## DOM stands for a Document object model   ###

It is a programming interface for web documents. When a web page is loaded, the browser creates a live object-oriented representation of the page — this is the DOM.
1.It represents the HTML elements as a tree of nodes (objects).
2.It allows programming languages (like JavaScript) to interact with, modify, and update the structure, content, and styling of a website dynamically.

### example here :  ###
For this HTML:
<html>
  <body>
    <h1>Hello, DOM!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

The DOM tree look like this :
Document
 └── html
     └── body
         ├── h1
         └── p


###  Basic of DOM manipulation ###
DOM manipulation is using JavaScript to access and change the content, structure, or style of elements on a web page.

Here are some basic DOM manipulation methods:
### Accessing the elements  ###

1. `document.getElementById()`: Returns the element with the specified id.
2. `document.querySelector()`: Returns the first element that matches the specified CSS selector.
3. `document.querySelectorAll()`: Returns a list of elements that match the specified CSS selector.
4.`document.getElementByClassName()`: Returns a list of elements with the specified class name.
5.`document.getElementByTagName()`: Returns a list of elements with the specified tag name.

### changing the content ###
1. `element.textContent`: Sets or returns the text content of an element.
2. `element.innerHTML`: Sets or returns the HTML content of an element.

### changing the style ###
1.document.getElementById().style.color=" "; # change the color of the element
2.document.getElementById().style.fontSize="20px"; # change the font size of the element



### Adding and removing the Elements ###
let newPara = document.createElement("p"); # create a new paragraph element
newPara.textContent = "This is a new paragraph."; # set the text content of the new paragraph
document.body.appendChild(newPara);  // Add it to the body

// Remove an element
let oldPara = document.getElementById("oldPara");
oldPara.remove();


### Handling the events ###
1. `addEventListener()`: Adds an event listener to an element.
2. `removeEventListener()`: Removes an event listener from an element.


In addEventListener("event",callback)
- event is the event type (e.g. click, mouseover, etc.)
- callback is the function that will be called when the event occurs.