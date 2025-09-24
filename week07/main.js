let el = document.getElementById("demo")
// console.log(el.innerHTML)
// console.log(el.innerText)
// console.log(el.textContent)
 
//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
const pElement = document.createElement('p')
//1.5 add format='italic' attribute to <p>
pElement.setAttribute('format', 'italic')
//2. try to add three different text types
el.appendChild(pElement)
//2.1 add <i>Sample Italic Text</i> with innerHTML
let p1 = document.createElement('p')
p1.innerHTML = '<i>Sample Italic Text</i>'
pElement.append(p1)
//2.2  add <i>Sample Italic Text</i> with innerText
let p2 = document.createElement('p')
p2.innerText= '<i>Sample Italic Text</i>'
pElement.append(p2)
//2.3 add <i>Sample Italic Text</i> with textContent
let p3 = document.createElement('p')
p3.textContent= '<i>Sample Italic Text</i>'
pElement.append(p3)