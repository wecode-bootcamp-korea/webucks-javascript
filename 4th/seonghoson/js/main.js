const logoutBtn = document.getElementById("logoutBtn");
const headerLogo = document.getElementsByClassName("headerLogo")[0];

headerLogo.addEventListener("click", (e) => {
  // 리스트로 이동
  window.location = "http://localhost:5500/4th/seonghoson/list.html?";
});
logoutBtn.addEventListener("click", (e) => {
  // 로그인으로 이동
  window.location = "http://localhost:5500/4th/seonghoson/login.html?";
});
