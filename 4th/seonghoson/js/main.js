const logoutBtn = document.getElementById("logoutBtn");
const headerLogo = document.getElementsByClassName("headerLogo")[0];

headerLogo.addEventListener("click", (e) => {
  window.location = "http://localhost:5500/list.html?";
});
logoutBtn.addEventListener("click", (e) => {
  window.location = "http://localhost:5500/login.html?";
});
