const userInfo = document.querySelector(".userinfo");
const user = document.querySelector(".user");
const password = document.querySelector(".password");
const btn = document.querySelector("#login-btn");

function moveList() {
    location.href = "/list.html";
}

function paintBtn() {
    if(user.value.includes('@') && password.value.length >= 8) {
        btn.style.backgroundColor = "#60ADED";
        btn.setAttribute('onclick', 'moveList();');
    } else {
        btn.style.backgroundColor = '';
    }
}

userInfo.addEventListener('keyup', paintBtn);
