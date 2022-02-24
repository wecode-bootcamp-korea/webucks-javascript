const inputId = document.querySelector(".id");
const inputPw = document.querySelector(".pw");
const disabledBtn = document.querySelector(".login-btn");

inputPw.addEventListener("keyup", activateBtn);

function activateBtn() {
  if (inputId.value.includes("@") && inputPw.value.length >= 8) {
    disabledBtn.disabled = false;
    disabledBtn.style.opacity = 1;
  } else {
    disabledBtn.disabled = true;
    disabledBtn.style.opacity = 0.4;
  }
}
