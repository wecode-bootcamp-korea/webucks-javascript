const idInput = document.querySelector("#id-input");
const pwInput = document.querySelector("#pw-input");
const loginButton = document.querySelector("#login-button");

idInput.addEventListener("keyup", activateLogin);
pwInput.addEventListener("keyup", activateLogin);

function isValid(){
  return (idInput.value.includes("@")) && (pwInput.value.length >= 8);
}

function activateLogin() {
  if (isValid()) {
    loginButton.classList.add("active");
  }
}

loginButton.addEventListener("click", login);


function login() {

  event.preventDefault();
  window.location.href = "./list.html";
}