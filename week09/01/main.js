const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const form = document.querySelector("form");
const p = document.querySelector("p");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (password.value !== confirmPass.value) {
    p.style.color = "red";
    p.textContent = "password and comfirm do not match, check again";
  } else if (
    !username.value ||
    !email.value ||
    !password.value ||
    !confirmPass.value
  ) {
    p.style.color = "red";
    p.textContent = "missing some values, please try again!";
  } else {
    p.style.color = "green";
    p.textContent = 'your data completed'
  }

    
});
