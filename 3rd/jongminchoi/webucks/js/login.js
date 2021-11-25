let id = document.getElementById("emailInput");
let pw = document.getElementById("passwordInput");
let thisIsButton = document.getElementById("login-button");

id.addEventListener("input", function () {
  if (id.value.includes("@") && pw.value.length >= 8) {
    thisIsButton.removeAttribute("disabled");
    thisIsButton.style.backgroundColor = "#60ADED";
    thisIsButton.style.cursor = "pointer";
  } else if (pw.value.length < 8 || id.value.includes("@") === false) {
    thisIsButton.setAttribute("disabled", "");
    thisIsButton.style.backgroundColor = "#add3eb";
    thisIsButton.style.cursor = "default";
  }
  sessionStorage.setItem("ID", id.value);
});

pw.addEventListener("input", function () {
  if (id.value.includes("@") && pw.value.length >= 8) {
    thisIsButton.removeAttribute("disabled");
    thisIsButton.style.backgroundColor = "#60ADED";
    thisIsButton.style.cursor = "pointer";
  } else if (pw.value.length < 8 || id.value.includes("@") === false) {
    thisIsButton.setAttribute("disabled", "");
    thisIsButton.style.backgroundColor = "#add3eb";
    thisIsButton.style.cursor = "default";
  }
});
