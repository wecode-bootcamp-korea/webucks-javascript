const id = document.getElementById("loginId");
const psw = document.getElementById('loginPsw');
const loginBtn = document.getElementById('loginBtn')
const loginBox = document.getElementById('loginBox')

const linkListPage = (event) => { // 유효성 통과 후 버튼 클릭시 리스트 페이지로 가는 함수
  event.preventDefault();
  if(id.value.includes('@') && psw.value.length>=8) {
  return window.location.href="../list.html"
  }
}

const checkedIdNPsw = () => { // id와 psw 유효할시 로그인 창 투명해지도록 하는 함수
  if(id.value.includes('@') && psw.value.length>=8) {
    return loginBtn.style.opacity = 0.5;
  }
}

loginBox.addEventListener('input', checkedIdNPsw)
loginBtn.addEventListener('click', linkListPage)