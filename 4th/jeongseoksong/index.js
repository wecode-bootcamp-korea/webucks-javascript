const inputId = document.getElementsByClassName('loginId');
const inputPw = document.getElementsByClassName('loginPasswd');
const loginBtn = document.getElementsByClassName('loginButton');



function activeBtn() {
    console.log (inputId.value)
    if (inputId[0].value.includes('@') && inputPw[0].value.length > 7){
        console.log('login possible')
        loginBtn.style.opecity = 1;
        loginBtn.disabled = false;
    } else {
        loginBtn.style.opective = 0.5;
        loginBtn.disabled = true;
        console.log('no')
    }
}

inputId.addEventListener('keyup', activeBtn);
inputPw.addEventListener('keyup', activeBtn);
