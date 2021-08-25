

const inputId = document.getElementById("id");
const inputPassword = document.getElementById("password")
const thisIsButton = document.getElementsByClassName("loginbutton")[0];

inputPassword.addEventListener("input", function() {
  const checkId = document.getElementById("id").value;
  const checkPassword = document.getElementById("password").value;

  if ((checkId.includes("@")) && checkPassword.length >= 8) {
  thisIsButton.style.opacity = 1;
  thisIsButton.addEventListener("click", function (){
    location.href="list.html"
  })
}
});
