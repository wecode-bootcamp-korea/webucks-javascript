const loginBox = document.querySelector('.loginBox');
const loginBtn = document.querySelector('.loginBtn');

loginBox.onkeyup = function () {
    const userId = document.querySelector('.id');
    const userPw = document.querySelector('.pw');

    ((userId.value.includes('@')) && (userPw.value.length >= 8))
    ? (loginBtn.classList.add('active'), loginBtn.onclick = moveList) : (loginBtn.classList.remove('active'), loginBtn.onclick=null);
};

function moveList(e) {
    e.preventDefault();
    window.location.href = "list.html";
}


// 아이디와 패스워드 조건에 맞을 시 border-color 초록색으로 변경
const idBox = document.getElementById('loginId');
const pwBox = document.getElementById('loginPw');

idBox.onkeyup = function () {
    const userId = document.querySelector('.id');

    if (userId.value.includes('@')) {
        userId.style.borderColor = 'green';
    }
    else {
        userId.style.borderColor = '#e3e3e3';
    }
}

pwBox.onkeyup = function () {
    const userPw = document.querySelector('.pw');
    const regexPw = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,20}/;

    if (regexPw.test(userPw.value)) {
        userPw.style.borderColor = 'green';
    }
    else {
        userPw.style.borderColor = '#e3e3e3';
    }
}

// 비밀번호 hide, show
const show = document.querySelector('.eye');
const pwInput = document.querySelector('.pw');

show.addEventListener('click', e => {
    if (e.target.className == "fa fa-eye eye") {
        e.target.className = "far fa-eye-slash eye";
        pwInput.setAttribute('type', 'text');
    }
    else {
        e.target.className = "fa fa-eye eye";
        pwInput.setAttribute('type', 'password');
    }
});