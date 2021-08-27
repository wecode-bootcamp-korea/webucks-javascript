const text = document.getElementsByClassName("text")[0];
const password = document.getElementsByClassName("password")[0];
const button = document.querySelector(".button");

function login() {
    let txt = text.value;
    let pwd = password.value.length;
    if  ((txt.includes("@")) && (pwd >= 8)) {
         button.style.opacity = 1;
         button.disabled = false;
    }
}

text.addEventListener("keyup", login);
password.addEventListener("keyup", login);