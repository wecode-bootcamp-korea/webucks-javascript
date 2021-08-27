/*
    좋아요 버튼 클릭시, 하트의 색상 변경 기능
    새롭게 추가 되는 댓글의 좋아요 버튼에도 이벤트를 추가하기 위해 changeLikeBtnColor(btn) 메소드를 따로 정의
*/
function changeLikeBtnColor(btn) {
  btn.addEventListener("click", function (e) {
    this.style.color = this.style.color === "tomato" ? "" : "tomato";
  });
}
const likeBtnList = document.querySelectorAll(".like-wrap");

likeBtnList.forEach((el) => changeLikeBtnColor(el));

/*
    리뷰 댓글 추가 기능
*/
const reviewInput = document.querySelector(".review-input");
const reviewList = document.querySelector(".review-list");

reviewInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && reviewInput.value !== "") {
    const liTag = document.createElement("li");
    const dlTag = document.createElement("dl");
    const dtTag = document.createElement("dt");
    const ddTag = document.createElement("dd");
    const delBtnTag = document.createElement("button");
    const likeBtnTag = document.createElement("button");
    const iTag = document.createElement("i");

    const userId = document.cookie
      .split(";")
      .find((el) => el.startsWith("userId"))
      .split("=")[1];

    dtTag.innerHTML = userId;
    ddTag.innerHTML = reviewInput.value;

    delBtnTag.innerHTML = "삭제";
    delBtnTag.setAttribute("class", "del-btn");
    addDelEvent(delBtnTag);

    iTag.setAttribute("class", "far fa-heart");
    likeBtnTag.setAttribute("class", "like-wrap");
    likeBtnTag.setAttribute("id", "review-like");
    changeLikeBtnColor(likeBtnTag);

    dlTag.appendChild(dtTag);
    dlTag.appendChild(ddTag);
    dlTag.appendChild(delBtnTag);
    likeBtnTag.appendChild(iTag);
    dlTag.appendChild(likeBtnTag);
    liTag.appendChild(dlTag);
    reviewList.appendChild(liTag);
    reviewInput.value = "";
  }
});

/*
    리뷰 댓글 삭제 기능
    새롭게 추가된 댓글의 삭제 버튼에 이벤트를 추가하기 위해 addDelEvent(btn) 메소드를 따로 정의
*/
function addDelEvent(btn) {
  btn.addEventListener("click", function (e) {
    const review = this.parentNode.parentNode;
    reviewList.removeChild(review);
  });
}

const delReviewBtns = reviewList.querySelectorAll(".del-btn");

//페이지 로드시 기존에 있는 댓글 버튼들에 삭제 기능 추가
delReviewBtns.forEach((el) => addDelEvent(el));
