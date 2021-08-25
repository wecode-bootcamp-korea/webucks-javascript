const userId = document.querySelector('#userId');
const userPw = document.querySelector('#userPw');
const loginBtn = document.querySelector('#loginBtn');

let validUserId = false;
let validUserPw = false;

function checkValidId(input) {
    validUserId = input.includes("@");
    validateLoginBtn();
}

function checkValidPw(input) {
    validUserPw = input.length >= 8;
    validateLoginBtn();
}

function validateLoginBtn() {
    if(validUserId && validUserPw) {
        loginBtn.removeAttribute('disabled');
        loginBtn.style.backgroundColor = "#3795f6";
        loginBtn.style.cursor = "pointer";
    } else {
        loginBtn.setAttribute('disabled', '');
        loginBtn.style.backgroundColor = "#b2dffd";
    }
}

userId.addEventListener('keyup', () => { checkValidId(userId.value); });
userPw.addEventListener('keyup', () => { checkValidPw(userPw.value); });