const putId = document.querySelector('#id');
const putPw = document.querySelector('#pw');
const logInBtn = document.querySelector('#logInBtn');

function activeBtn () {
  switch ((putId.value.includes('@')) && (putPw.value.length > 7)) {
    case true: logInBtn.disabled = false;
    logInBtn.style.opacity = 1; break;
    case false: logInBtn.disabled = true;
    logInBtn.style.opacity = 0.5; break;
  }
}

putId.addEventListener('keyup', activeBtn);
putPw.addEventListener('keyup', activeBtn);