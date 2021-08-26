const userId = document.querySelector('#userId');
const userPw = document.querySelector('#userPw');
const loginBtn = document.querySelector('#loginBtn');

let validUserId = false;
let validUserPw = false;

/*
    아이디 유효성 체크 메소드 - 조건: 이메일 정규식
*/
function checkValidId(input) {
    const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[0-9a-zA-Z]{2,5}$/i;
    validUserId = input.match(emailRegExp) != null ? true : false;
    validateLoginBtn();
}

/*
    비밀번호 유효성 체크 메소드 - 조건: 8글자 이상
*/
function checkValidPw(input) {
    validUserPw = input.length >= 8;
    validateLoginBtn();
}

/*
    아이디와 비밀번호 유효성 체크하여 버튼 ON/OFF
*/
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

/*
    로그인 버튼 클릭시 입력된 아이디를 쿠키에 userId로 저장
*/
loginBtn.addEventListener('click', function(e) {
    document.cookie = `userId=${userId.value};`;
});