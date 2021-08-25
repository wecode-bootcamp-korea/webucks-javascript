const formData = document.querySelector(".loginForm");
const loginBtn = document.getElementById("loginBtn");

let isChecked = [false, false];

formData.addEventListener("input", (event) => {
  if (event.target.type === "text") {
    isChecked[0] = event.target.value.indexOf("@") !== -1 ? true : false;
  }
  if (event.target.type === "password") {
    isChecked[1] = event.target.value.length >= 8 ? true : false;
  }
  activationBtn(isChecked);
});

const activationBtn = (isChecked) => {
  if (isChecked[0] && isChecked[1]) {
    loginBtn.removeAttribute("disabled");
    loginBtn.style.opacity = 1;
  } else {
    loginBtn.setAttribute("disabled", true);
  }
};

loginBtn.addEventListener("click", (event) => {
  document.location.href = "list.html";
});
