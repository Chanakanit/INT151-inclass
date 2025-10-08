const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPass = document.getElementById('confirm-password')
const form = document.querySelector('form')
const p = document.querySelector('p')


form.addEventListener('submit', () => {
    if(!username.value || !email.value || !password.value || !confirmPass.value) {
        console.log('')
    }
})


