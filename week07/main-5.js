//1. create <p></p>
const pElement = document.createElement('p')
//2. create id="p5"
//sol#1
// const idAttr = document.createAttribute('id')
// idAttr.value = 'p5'
//sol#2
pElement.setAttribute("id", "p5")
//3. binding id="p5" to <p>
//sol#1
// pElement.setAttributeNode(idAttr)
//sol#2 skip
//4. create text value '#5'
//sol#1
// const pText = document.createTextNode("#5")
//sol#2 
pElement.textContent = '#5'
//5. binding '#5' to <p>
// pElement.appendChild(pText) //<p id="p5">#5</p>
//sol#2 skip
//6. binding <p id="p5">#5</p5> ot body
const body = document.body
body.appendChild(pElement) //<body>...<p id="p5">#p5"</p5></body>