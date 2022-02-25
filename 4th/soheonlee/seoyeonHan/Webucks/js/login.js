const idInput = document.querySelector("#idValue");
const pwdInput = document.querySelector("#pwdValue");
const loginBtn = document.querySelector("#btn");

function activeBtn(){
    idInput.value.includes("@") && pwdInput.value.length > 7
    ? setLoginBtn(false, 1)
    : setLoginBtn(true, 0.5)
}

function setLoginBtn(disabled, opacity){
    loginBtn.disabled = disabled,
    loginBtn.style.opacity = opacity;
}

idInput.addEventListener("keyup", activeBtn);
pwdInput.addEventListener("keyup", activeBtn);