const loginForm = document.getElementsByClassName('loginForm')[0];
const loginID = document.getElementsByClassName('loginInput')[0];
const loginPW = document.getElementsByClassName('loginInput')[1];
const loginButton = document.getElementsByClassName('loginBtn')[0];
const eye = document.getElementsByClassName('eye')[0];

// 로그인 버튼 활성화 함수
function setLoginBtn(isAble, btnColor) {
    loginButton.disabled = isAble;
    loginButton.style.background = btnColor;
}

// list로 넘어가는 함수
function toList() {
    window.location.href = "list.html";
}

// id 활성화 이벤트
loginID.addEventListener('keyup', () => {
    if (loginID.value.includes('@')) {
     loginID.classList.add('active')
     loginID.classList.remove('inActive')
    } else {
     loginID.classList.add('inActive')
     loginID.classList.remove('active')
    } 
});

// pw 활성화 이벤트
loginPW.addEventListener('keyup', () => {
    const required = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (required.test(loginPW.value)) {
     loginPW.classList.add('active')
     loginPW.classList.remove('inActive')
    } else {
     loginPW.classList.add('inActive')
     loginPW.classList.remove('active')
    } 
});

// button 활성화 이벤트
loginForm.addEventListener('keyup', () => {
    loginID.classList.contains('active') && loginPW.classList.contains('active')
    ? setLoginBtn(false, '#62adec')
    : setLoginBtn(true, '#d5e7f8');
});

// ENTER키 누르면 화면 넘어가는 이벤트
window.addEventListener('keyup', (e) => {
    if(e.key === 'Enter' && !loginButton.disabled) {
        toList();        
    }
});

// pw show / hide 이벤트
eye.addEventListener('click', () => {
    if (eye.classList.contains('fa-eye-slash')) {
        eye.classList.replace('fa-eye-slash', 'fa-eye');
        loginPW.type = 'text'
    } else {
        eye.classList.replace('fa-eye', 'fa-eye-slash');
        loginPW.type = 'password'
    }
})


