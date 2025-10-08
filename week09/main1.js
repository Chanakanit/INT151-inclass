const submitBtn = document.querySelector('body>div>button')
// console.log(submitBtn);

//1. add event with annonymous handle function
//  submitBtn.addEventListener('click', () => {
//     console.log("Submit button was clicked!");
//  })
// submitBtn.removeEventListener("click", () => {
//   console.log("Submit button was clicked!")
// }) //does not work

 //2. add event with named function
//  const handlerBtn = () => {
//     console.log('Submit button was clicked!');
    
// }
// submitBtn.addEventListener('click', handlerBtn)
// submitBtn.removeEventListener('click', handlerBtn)

//---------------------------------------

 const funClick = (event) => {
    console.log(event.target.id)
    console.log(event.target.nodeName)
    console.log(event.target.nodeType)
    console.log(event.target.nodeValue)
    console.log(event.target.parentElement)
    console.log(event.currentTarget)
    console.log(event.eventPhase)
    console.log(`${event.target.nodeName} was clicked!`)
 }

 submitBtn.addEventListener('click', funClick)
 submitBtn.parentElement.addEventListener('click', funClick)
 submitBtn.parentElement.parentElement.addEventListener('click', funClick)

