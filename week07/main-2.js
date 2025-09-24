const divElement = document.getElementById("123")
//1. get all attributes on <div id='123'>
const divAttrs = divElement.attributes
console.log(divAttrs.length) //2

for (let i = 0; i < divAttrs.length; i++) {
  const attrName = divAttrs[i].name //get attribute name
  const attrValue = divAttrs[i].value //get attribute value
  console.log(`attribute name: ${attrName}, attribute value: ${attrValue}`)
  console.log(divAttrs[i].ownerElement)
}
console.log(divElement.getAttribute("id")) //find attribute value
console.log(divElement.getAttribute("style")) //find attribute value
 