const loginId = document.getElementById("userLoginId");
const loginPsw = document.getElementById("userLoginPsw");
const loginBtn = document.getElementById("userLoginBtn");
const loginIdAndPswBox = document.getElementById('loginForm')


const verifyLoginConditions = () => { // ID와 PSW 유효성 검사를 해주는 함수
  const loginIdValue = loginId.value;  
  const loginPwdValue = loginPsw.value;
  return loginIdValue.includes('@') && loginPwdValue.length >= 8
}

const moveListPage = () => { // 유효성 통과 후 버튼 클릭시 리스트 페이지로 가는 함수
  if (verifyLoginConditions()) {
    return loginBtn.disabled = false
  }
}

const changeBtnColor = () => { // id와 psw 유효할시 로그인 창 색이 변하는 함수
  if (verifyLoginConditions()) {
    return loginBtn.classList.add('changeBtnColor')
  } else {
    return loginBtn.classList.remove('changeBtnColor');
  }
}

loginIdAndPswBox.addEventListener('input', moveListPage);
loginIdAndPswBox.addEventListener('input', changeBtnColor);