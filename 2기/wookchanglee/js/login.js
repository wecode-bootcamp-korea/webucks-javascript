const $id = document.querySelector('.login-form__id');
const $pw = document.querySelector('.login-form__pw');
const $btn = document.querySelector('.login-form__btn');
const $form = document.querySelector('.login-form');
const $eye = document.querySelector('.fas');
//1. 아이디에 @가 있을 시 로그인 버튼 활성화



let handleLoginVerify = () =>{
  
  let str = $id.value;
  let password = $pw.value;
  let verifyId = str.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);
  let verifyPw = password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/);

  if(verifyId){
    $id.classList.add('login-form__verified');
  }else{
    $id.classList.remove('login-form__verified');
  }

  if(verifyPw){
    $pw.classList.add('login-form__verified');
  }else{
    $pw.classList.remove('login-form__verified');
  }

  if( verifyId && verifyPw ){
    $btn.style.backgroundColor='#61ADED';
    $btn.style.cursor='pointer';
    $form.action='./list.html';
  }else{
    $btn.style.backgroundColor='#add3eb';
    $btn.style.cursor='default';
    $form.action='#';
  }
}

let handleVisible = () => {

  $eye.classList.contains('fa-eye') ? $pw.type='text' : $pw.type='password';

  $eye.classList.toggle('fa-eye');
  $eye.classList.toggle('fa-eye-slash');

}

$id.addEventListener('keyup',handleLoginVerify);
$pw.addEventListener('keyup',handleLoginVerify);
$eye.addEventListener('click',handleVisible);