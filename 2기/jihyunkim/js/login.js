const loginButton = document.querySelector("#login-button");

const idInput = document.querySelector("#id-input");
const pwInput = document.querySelector("#pw-input");

idInput.addEventListener("keyup", activateLogin);
pwInput.addEventListener("keyup", activateLogin);

function activateLogin() {
  if ((idInput.value.includes("@")) && (pwInput.value.length >= 8)) {
      loginButton.disabled = false;
      loginButton.style.backgroundColor = "#60ADED";
  } else {
      loginButton.disabled = true;
      loginButton.style.backgroundColor =  "#D4E6F8";
  }
}

loginButton.addEventListener("click", login);

function login() {
  if ((idInput.value.includes("@")) && (pwInput.value.length >= 8)) {
    event.preventDefault();
    window.location.href = "./list.html";
  }
}