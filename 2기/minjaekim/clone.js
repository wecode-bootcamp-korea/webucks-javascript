const emailInput = document.getElementsByClassName('emailInput')[0];
const passwordInput =document.getElementsByClassName('passwordInput')[0];
const loginBtn = document.getElementsByClassName('loginButton')[0];

const isValidInput = () => {
    return passwordInput.value.length>=8 && emailInput.value.includes("@")
}

const handlerEmailFuc = (event) => {
    const isVaild = isValidInput();
    event.target.value.includes() 
}
const handlerPswFuc = (event) => {}


emailInput.addEventListener('input',handlerFuc);
passwordInput.addEventListener('input',handlerFuc);

