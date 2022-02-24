const loginInputID = document.body.getElementsByClassName('login__form__id')[0];
const loginInputPW = document.body.getElementsByClassName('login__form__pw')[0];
const loginBtn = document.body.getElementsByClassName('login__form__btn')[0];
const loginForm = document.body.getElementsByClassName('login__form')[0];


loginInputID.addEventListener('keyup', loginBtnActive);
loginInputPW.addEventListener('keyup', loginBtnActive);
loginBtn.addEventListener('click', clickLoginBtn);
loginForm.addEventListener('keyup', onEnterLogin);

function loginBtnActive() {
  loginInputID.value.includes('@') && 
  loginInputPW.value.length > 7
  ?
  (loginBtn.disabled = false,
  loginBtn.classList.add('active'))
  :
  (loginBtn.disabled = true,
  loginBtn.classList.remove('active'))
}

function clickLoginBtn() {
  location.href = 'list.html'
}

function onEnterLogin(event) {
  if(event.key == "Enter") clickLoginBtn();
}
