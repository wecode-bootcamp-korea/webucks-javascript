const emailInput = document.getElementById("userId");
const passwordInput = document.getElementById("userPwd");
const loginButton = document.querySelector(".loginBtn");

const checkValidation = () => {
  return emailInput.value.includes("@") && passwordInput.value.length > 7;
};

const changeColor = () => {
  const isValid = checkValidation();
  if (isValid) {
    loginButton.classList.add("active");
    loginButton.addAttribute("disabled");
  }
};

emailInput.addEventListener("input", changeColor);
passwordInput.addEventListener("input", changeColor);
