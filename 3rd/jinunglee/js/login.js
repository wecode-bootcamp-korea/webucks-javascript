const checkId = document.getElementById("account")
const checkPw = document.getElementById("password")
const checkButton = document.getElementById("checkButton");

checkId.addEventListener("input", function() {
  if (checkId.value.includes("@") && checkPw.value.length >= 8) {
    checkButton.removeAttribute("disabled")
    checkButton.style.opacity = 1.0;
  } else {
    checkButton.style.opacity = 0.5;
  }
});

checkPw.addEventListener("input", function() {
  if (checkId.value.includes("@") && checkPw.value.length >= 8) {
    checkButton.removeAttribute("disabled")
    checkButton.style.opacity = 1.0;
  } else {
    checkButton.style.opacity = 0.5;
  }
});

checkButton.addEventListener("click", function() {
  console.log(1)
  window.location.href="/list.html"
});