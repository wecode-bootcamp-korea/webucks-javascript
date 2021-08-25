const loginBtn = document.querySelector(".loginBtn");
const userID = document.querySelector("#userID");
const userPw = document.querySelector("#userPw");
// const loginForm = document.querySelector(".loginFormContainer");
// console.log("loginForm", loginForm)

console.log("userID", userID);
console.log("userPw", userPw);
console.log("userPw.value.length", userPw.value.length);
console.log("loginBtn", loginBtn);
// console.log(userID.value[0] === "@");

let loginReady = false;

function addAtSign() {
  if (userID.value.length === 0) {
    userID.value = "@";
    console.log("userID", userID);
  }
}

function clearUserID() {
  if (userID.value === "@") {
    // console.log("works");
    userID.value = "";
  }
}

function changeBtnColor() {
  //should add regexp logic in the future
  // console.log("userPw.value.length", userPw.value.length);
  if (
    userID.value[0] === "@" &&
    userID.value.length >= 2 &&
    userPw.value.length >= 8
  ) {
    loginReady = true;
    // console.log("loginReady", loginReady);
    loginBtn.style.backgroundColor = "#62ADEC";
    loginBtn.style.cursor = "pointer";
  } else {
    loginReady = false;
    // console.log("loginReady", loginReady);
    loginBtn.style.backgroundColor = "#aed3ea";
    loginBtn.style.cursor = "default";
  }
}

function handleLogin() {
  if (loginReady) {
    alert("SUCCESSFULLY LOGGED IN");
    window.location.href = "./list.html";
  }
}

userID.addEventListener("click", addAtSign);
userID.addEventListener("blur", clearUserID);
userID.addEventListener("input", changeBtnColor);
userPw.addEventListener("input", changeBtnColor);
loginBtn.addEventListener("click", handleLogin);
