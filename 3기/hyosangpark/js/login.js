'use strict'

const loginBtn = document.getElementById('loginButton');
const thisIsId = document.getElementById('inputId');
const thisIsPw = document.getElementById('inputPw');   

/*
아이디에 @가 들어가는지, 비밀번호가 8자리 이상인지 유효성을 체크하는 함수
*/
function isValid(id, pw) {
    let isEmail = id.includes('@');
    let isEightDegit = (pw.length >= 8) ? true : false;
    return isEmail && isEightDegit;
}

/*
ID와 Password가 ID 자리 또는 Password 자리에서 입증되면, 버튼을
활성화하고 입증이 안되면 버튼을 비활성화하는 이벤트함수  
*/
document.querySelectorAll('.inputBox').forEach(item => {
    item.addEventListener('keyup', event => {
        const id = thisIsId.value; 
        const pw = thisIsPw.value; 
        if (isValid(id,pw)){
            loginBtn.style.backgroundColor = "#68b8db"; 
        } 
        else {
            loginBtn.style.backgroundColor = "#aed3ea";
        }
    });
}); 

/*
로그인 버튼 클릭 시, 아이디와 비밀번호가 입증된 상태라면 리스트 페이지
로 넘어가고 입증 안 된 상태라면 아이디/패스워드가 틀렸다는 메세지 알림
*/ 
loginBtn.addEventListener('click', function(e) {
    const id = thisIsId.value; 
    const pw = thisIsPw.value;
    if (isValid(id,pw)){
        e.preventDefault();
        //  window.open('list.html');         // 새로운 창으로 열고 싶은 경우
        window.location.href = 'list.html';  // 기존 창으로 열고 싶은 경우 
    }
    else {
        alert("아이디 또는 패스워드가 틀렸습니다.");
    }
}); 