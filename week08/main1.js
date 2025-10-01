const appetizer = document.querySelector('#appetizer')
console.log([...appetizer.childNodes].map(e => e.textContent));

//เธอฟ้อนเอน ผมฟ้อนรำ 006

const meatElement = document.querySelector('.meat')
console.log(meatElement.textContent);

const meatAllElements = document.querySelectorAll('.meat')
meatAllElements.forEach(el => console.log(el.textContent))

console.log([...meatAllElements].filter(el => el.textContent.toLocaleLowerCase().includes('soup')).map(el => el.textContent));

console.log("----------------------");

//3. fo to the first child element node under <ul id="soup"></ul> and display all sibling nodes

const ulElement = document.querySelector("#soup")
// let currentNode = ulElement.children[0]
let currentNode = ulElement.firstElementChild
while (currentNode !== null) {
  console.log(currentNode)
  currentNode = currentNode.nextElementSibling
}

console.log("----------------------");
//1. getElementsByName(), return NOdeLIst data type
const fnameElements = document.getElementsByName('fname')
console.log(fnameElements.length);
fnameElements.forEach(ele => console.log(ele))

//2. getElementsByTagName(), return HTMLCollection (array-like) data type
const inputElements = document.getElementsByTagName('input')
Array.from(inputElements).forEach(ele => console.log(ele))
//3. getElementsByClassName(), return HTMLCollection (array-like) data type
const veganElements = document.getElementsByClassName('vegan')
Array.from(veganElements).forEach(ele => console.log(ele))

console.log("-------------");

//4. find the first element of document that has an ID values "appetizer" or "soup"
const firstEl = document.querySelector('#appetizer, #soup')
console.log(firstEl);

//5. find all meat element under <ul id="apperizer"> or <ul id="soup"> only
const idMenu = document.getElementById('menu')
const meatEl = document.querySelectorAll('#appetizer .meat, #soup .meat')
const meatUl = document.getElementsByTagName('ul')
console.log([...meatEl]);

console.log([...meatUl].filter(el => el.id === 'appetizer' || el.id === 'soup').map(el => el.classList === 'meat'));
