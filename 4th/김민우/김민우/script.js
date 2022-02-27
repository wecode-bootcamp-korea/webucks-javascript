const Btn = document.getElementsByClassName('btn')
const id = document.getElementsByClassName('id'); 
const password = document.getElementsByClassName('password'); 

function btnOn() {
    if (id.value.includes('@') && password.value.length >= 8) {
        Btn.style.opacity = "1"; 
    } else {
        Btn.style.opacity = "0.3"; 
    }
}


id.addEventListener("keyup", btnOn);
password.addEventListener("keyup", btnOn);

function btnActive()  {
    const target = document.getElementsByClassName('target_btn');
    target.disabled = false;
  }
  
  function btnDisabled()  {
    const target = document.getElementsByClassName('target_btn');
    target.disabled = true;
  }
