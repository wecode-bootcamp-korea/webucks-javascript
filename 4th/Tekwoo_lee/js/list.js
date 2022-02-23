// List 라이크 버튼 기능

iconSelect.addEventListener("click", function (e) {
  if (e.target.className === "fa-regular fa-heart") {
    e.target.className = "fa-solid fa-heart";
  } else {
    e.target.className = "fa-regular fa-heart";
  }
});
