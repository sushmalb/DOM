let ul = document.querySelector("#ul-1");
let div = document.querySelector("div");

//  Parent Node Traversal

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.documentElement; // reference to the root element of the HTML document, which is usually the <html> element.

console.log(html.parentElement);
console.log(html.parentNode);

//Child Node Traversal

console.log(ul.childNodes);
console.log(ul.firstChild);
ul.childNodes[1].style.backgroundColor = "blue";

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
ul.lastElementChild.style.backgroundColor = "yellow";

//SIBLING NODE TRAVERSALS
console.log(ul.previousSibling);
console.log(div.previousElementSibling);
console.log(div.lastElementSibling);
