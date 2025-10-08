// const fName = document.getElementById("fname")
// const lName = document.getElementById("lname")
// const message = document.getElementById("message")

// function checkEmpty(e) {
//   console.log(e)
//   if (e.target.value.trim().length === 0) {
//     message.style.color = "red"
//     message.textContent = `your ${e.target.id} is empty`
//   }
// }
// fName.addEventListener("blur", checkEmpty)
// lName.addEventListener("blur", checkEmpty)
 

// const info = document.getElementById('info')
// info.addEventListener('mouseout', (event) => {
// console.log('mouse out')
// })
// info.addEventListener('mouseover', (event) => {
// console.log('mouse over')
// })
// window.addEventListener('mousemove', (event) => {
// info.textContent = `Mouse at X: ${event.clientX}, Y: ${event.clientY}`
// })

const inputMessage = document.getElementById('message')
inputMessage.addEventListener('keyup', (event) => {
  console.log(event.key)
})
 