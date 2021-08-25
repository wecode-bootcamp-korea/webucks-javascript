const id = document.querySelector('.login-form__id');
const pw = document.querySelector('.login-form__pw');
const btn = document.querySelector('.login-form__btn');
const form = document.querySelector('.login-form');
//1. 아이디에 @가 있을 시 로그인 버튼 활성화

let handleLoginVerify = () =>{

  let str = id.value;
  let password = pw.value;
  
  if( str.includes('@') && password.length>7 ){
    btn.style.backgroundColor='#61ADED';
    btn.style.cursor='pointer';
    form.action='./list.html';
  }else{
    btn.style.backgroundColor='#add3eb';
    btn.style.cursor='default';
    form.action='#';
  }
  
}





id.addEventListener('keyup',handleLoginVerify);
pw.addEventListener('keyup',handleLoginVerify);

