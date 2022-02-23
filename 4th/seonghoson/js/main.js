const logoutBtn = document.getElementById("logoutBtn");
const headerLogo = document.getElementsByClassName("headerLogo")[0];

headerLogo.addEventListener("click", (e) => {
  window.location = "http://localhost:5500/4th/seonghoson/list.html?";
});
logoutBtn.addEventListener("click", (e) => {
  window.location = "http://localhost:5500/4th/seonghoson/login.html?";
});
