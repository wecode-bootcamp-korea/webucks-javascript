const loginForm = document.querySelector(".login-form");
const id = document.querySelector(".id");
const password = document.querySelector(".password");
const button = document.querySelector(".button");

function LoginActive() {
  if (id.value.includes("@") && password.value.length >= 8) {
    button.classList.add("active");
    button.disabled = false;
  } else {
    button.classList.remove("active");
    button.disabled = true;
  }
}

loginForm.addEventListener("keyup", LoginActive);
