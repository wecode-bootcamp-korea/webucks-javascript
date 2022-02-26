const Btn = document.querySelector('.btn')
const id = document.getElementById('.id'); 
const password = document.getElementById('.password'); 

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
    const target = document.getElementById('target_btn');
    target.disabled = false;
  }
  
  function btnDisabled()  {
    const target = document.getElementById('target_btn');
    target.disabled = true;
  }