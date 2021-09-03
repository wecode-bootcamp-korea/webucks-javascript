const inputId = document.getElementsByClassName('inputId')[0];
const inputPw = document.getElementsByClassName('inputPw')[0];
const loginBtn = document.getElementsByClassName('loginBtn')[0];

const isValidInput = () =>{
  return inputId.value.includes("@") && inputPw.value.length>=8;
}

const LoginPageInputChange = (event) =>{
  if(isValidInput()){
    loginBtn.classList.add('active');
    loginBtn.disabled = false;
  }else{
    loginBtn.classList.remove('active'); 
    loginBtn.disabled = true;
  }
}

inputId.addEventListener('input', LoginPageInputChange);
inputPw.addEventListener('input', LoginPageInputChange);