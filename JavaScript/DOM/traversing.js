// SELECT ELEMENT
let container = document.getElementById("container");

//PARENT TRAVERSING
// Parent node (can be element, document, text)
console.log(container.parentNode);

// Parent element (only HTML element)
console.log(container.parentElement);

//CHILD TRAVERSING
// All child nodes (includes text, comments)
console.log(container.childNodes);

// Only element children
console.log(container.children);

// First child (can be text)
console.log(container.firstChild);

// First element child
console.log(container.firstElementChild);

// Last child (can be text)
console.log(container.lastChild);

// Last element child
console.log(container.lastElementChild);

//SIBLING TRAVERSING
let firstChildElement = container.firstElementChild;

// Next sibling (can be text)
console.log(firstChildElement.nextSibling);

// Next element sibling
console.log(firstChildElement.nextElementSibling);

// Previous sibling (can be text)
console.log(container.lastElementChild.previousSibling);

// Previous element sibling
console.log(container.lastElementChild.previousElementSibling);

//PRACTICAL STYLE & TEXT CHANGES

// Change parent style
container.parentElement.style.border = "2px solid black"

// Change child text
container.children[1].textContent = "Updated Paragraph";

// Change next sibling color
container.children[1].nextElementSibling.style.color = "white";

// Change previous sibling background
container.lastElementChild.previousElementSibling.style.backgroundColor = "lightgrey";


