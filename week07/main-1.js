// console.log(window.document) //root node
// console.log(document) //root node
// console.log(typeof document)
// console.log(document.getElementById("123"))
// const htmlElement = document.documentElement
// console.log(htmlElement)

// console.log(htmlElement.parentElement) //null
// console.log(htmlElement.parentNode) //root node
// if (htmlElement.parentNode === document) {
//   console.log("parent of html is a root node")
// }

// console.log(document.firstChild) //<!DOCTYPE html>
// console.log(document.firstChild.nextSibling)
// //<!-- sample comment #1 -->
// console.log(document.firstChild.previousSibling) //null
// console.log(document.firstElementChild) //<html>
// console.log(document.firstElementChild.previousSibling) //<!-- sample comment #1 -->
// console.log(document.lastChild) //<!-- sample comment #3 -->
// console.log(document.lastElementChild) //<html lang="en">
 

//--------------------------
//1. get all child nodes under <div id="123">
const divElement = document.getElementById('123')
//2. get all node types children (return (static) NodeList, can use forEach)
const divChildNodes = divElement.childNodes //get all node types childrem (NodeList, can use forEach)
console.log(divChildNodes.length);
divChildNodes.forEach((child) => console.log(child))
//3. get onlu Element node type children (return (dynamic) HTMLCollection, cannot use forEach)
// const divChildren = divElement.children
// console.log(divChildren.length) //2
// for (let i = 0; i < divChildren.length; i++) {
//     console.log(divChildren[i])
// }

Array.prototype.from(divChildren).forEach((child) => console.log(child))