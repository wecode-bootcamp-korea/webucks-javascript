/*
    좋아요 버튼 클릭시, 하트의 색상 변경 기능
*/
const likeBtnList = document.querySelectorAll(".like-wrap");

likeBtnList.forEach((el) =>
  el.addEventListener("click", function () {
    if (!el.classList.contains("clicked")) {
      el.classList.add("clicked");
    } else {
      el.classList.remove("clicked");
    }
  })
);
