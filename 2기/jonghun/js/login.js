const loginPassword = document.querySelector(".login__password");
const loginButton = document.querySelector(".login__button");
const loginId = document.querySelector(".login__id");
const passwordConatiner = document.querySelector(".password__conatiner");
const passwordToggle = document.querySelector(".password__toggle");

loginId.addEventListener("keyup", validIdAndPassword);
loginPassword.addEventListener("keyup", validIdAndPassword);
loginButton.addEventListener("click", loginSubmit);
passwordToggle.addEventListener("click", changeInputType);

function validIdAndPassword() {
  const idValidate = idValidation(loginId.value);
  const pwValidate = passwordValidation(loginPassword.value);

  if (idValidate) {
    loginId.classList.add("green-border");
  } else {
    loginId.classList.remove("green-border");
  }

  if (pwValidate) {
    passwordConatiner.classList.add("green-border");
  } else {
    passwordConatiner.classList.remove("green-border");
  }

  if (pwValidate && idValidation) {
    loginButton.classList.add("active");
  } else {
    loginButton.classList.remove("active");
  }
}

function loginSubmit(e) {
  e.preventDefault();
  userInfoSave(loginId.value);
  window.location.href = "./list.html";
}

function userInfoSave(id) {
  new CommonData("users").createData({ id });
}

function idValidation(id) {
  const validated = id.match(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*[.][a-zA-Z]{2,3}$/g
  );
  return validated && validated.length;
}

function passwordValidation(password) {
  const pwvalidate = password.match(
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
  );
  return pwvalidate && pwvalidate.length;
}

function changeInputType() {
  if (loginPassword.notPasswordType) {
    loginPassword.type = "password";
    loginPassword.notPasswordType = false;
  } else {
    loginPassword.notPasswordType = true;
    loginPassword.type = "text";
  }
}
