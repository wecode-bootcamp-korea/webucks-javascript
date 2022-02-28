const inputId = document.querySelector('.id');  // html에서 input의 id 클래스를 inputID에 할당
const inputPw = document.querySelector('.pw');  // html에서 input의 pw 클래스를 inputPw에 할당
const loginBtn = document.querySelector('.loginBtn') // html에서 input의 loginBtn 클래스를 loginBtn 에 할당

function activeBtn() {
  if(inputId.value.includes('@') && inputPw.value.length >= 8){
    loginBtn.style.opacity = 1
    loginBtn.disabled = false
    
    /*
    인풋 아이디의 벨류 안에 @가 있고, 인풋패스워드의 벨류길이가 8글자 이상이면
    로그인버튼의 투명도가 1로 바뀌고
    로그인디스에이블(현재 disabled 상태가 ture)를 false로 변경
    */
  } else {
    loginBtn.style.opacity = 0.5
    loginBtn.disabled = true
    
    /*
    반대는 그대로
    */
  }
}

inputId.addEventListener('keyup', activeBtn); // 아이디에 입력값이 있는지 체크
inputPw.addEventListener('keyup', activeBtn); // 비밀번호에 입력값이 있는지 체크