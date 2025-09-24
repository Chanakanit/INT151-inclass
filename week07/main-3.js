// 1. What is the node type of first child of root node
console.log(document.firstChild.nodeType);
// 2. if node type is an HTML nod edisplay "Hello , HTML node" otherwise "Hello, any node"
if (document.firstElementChild.nodeType === 1) {
  console.log("Hello, HTML node"); 
} else {
  console.log("Hello, any node");
}
 