const loginId = document.getElementById("userLoginId");
const loginPsw = document.getElementById('userLoginPsw');
const loginBtn = document.getElementById('userLoginBtn')
const loginIdNPswBox = document.querySelector('.userInputBox')

const linkListPage = (event) => { // 유효성 통과 후 버튼 클릭시 리스트 페이지로 가는 함수
  event.preventDefault();
  if(loginId.value.includes('@') && loginPsw.value.length>=8) {
    return window.location.href="../list.html"
  }
}

const checkedIdNPsw = () => { // id와 psw 유효할시 로그인 창 투명해지도록 하는 함수
  if(loginId.value.includes('@') && loginPsw.value.length>=8) {
    return loginBtn.style.opacity = 0.5;
  } 
  // 반대 로직 else 짜기 
}

loginIdNPswBox.addEventListener('input', checkedIdNPsw)
// input  이벤트 잘 모고 쓴점
loginBtn.addEventListener('click', linkListPage)

