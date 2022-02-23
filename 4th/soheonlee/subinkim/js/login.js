const loginForm = document.getElementsByClassName('loginForm')[0];
const loginID = document.getElementsByClassName('loginInput')[0];
const loginPW = document.getElementsByClassName('loginInput')[1];
const loginButton = document.getElementsByClassName('loginButton')[0];

// 로그인 버튼 활성화 함수
function setLoginBtn(isAble, btnColor) {
    loginButton.disabled = isAble;
    loginButton.style.background = btnColor;
}

// list로 넘어가는 함수
function toList() {
    window.location.href = "list.html";
}


// 로그인 활성화 & 비활성화 이벤트
loginForm.addEventListener('keyup', () => {
    loginID.value.includes('@') && loginPW.value.length >= 8 
    ? setLoginBtn(false, '#62adec') 
    : setLoginBtn(true, '#d5e7f8');
});

// ENTER키 누르면 화면 넘어가는 이벤트
window.addEventListener('keyup', (e) => {
    if(e.key === 'Enter' && !loginButton.disabled) {
        toList();        
    }
});

