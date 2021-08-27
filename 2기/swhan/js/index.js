const iptId = document.getElementById('ipt-id'); // id 입력란
const iptPw = document.getElementById('ipt-pw'); // pw 입력란
const btnLogin = document.getElementById('btn-login'); // login 버튼

/**
 * @param {*} _event keyup event
 * @description check id-pw validation and change CSS on login button
 */
function checkValidation(_event) {
  const strId = iptId.value;
  const strPw = iptPw.value;
  if (strId.indexOf('@') > -1 && strPw.length >= 8) {
    btnLogin.style.backgroundColor = '#60ADED';
    btnLogin.disabled = false;
  } else {
    btnLogin.style.backgroundColor = '#ADD3EA';
    btnLogin.disabled = true;
  }
}

iptId.addEventListener('keyup', checkValidation); // id 입력란 이벤트 bind
iptPw.addEventListener('keyup', checkValidation); // pw 입력란 이벤트 bind