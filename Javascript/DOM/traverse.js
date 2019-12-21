// TRAVERSING THE DOM //
var itemList = document.querySelector("#items");

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement  //Interchangeable with parentNode
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes  //Will get line breaks so not suggested to use
// console.log(itemList.childNodes);

//Children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild  //Will get line breaks so not suggested to use
// console.log(itemList.firstChild);

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild  //Will get line breaks so not suggested to use
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling  //Will get line breaks so not suggested to use
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling  //Will get line breaks so not suggested to use
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
var newDiv = document.createElement("div");

// Add class
newDiv.className = "hello";

// Add id
newDiv.id = "hello1";

// Add attr
newDiv.setAttribute("title", "Hello Div");

// Create text node
var newDivText = document.createTextNode("Hello World");

// Add text to div
newDiv.appendChild(newDivText);

console.log(newDiv);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv, h1);
