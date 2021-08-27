/*
    좋아요 버튼 클릭시, 하트의 색상 변경 기능
*/
const likeBtnList = document.querySelectorAll(".like-wrap");

likeBtnList.forEach((el) =>
  el.addEventListener("click", function (e) {
    el.style.color = this.style.color === "tomato" ? "" : "tomato";
  })
);
