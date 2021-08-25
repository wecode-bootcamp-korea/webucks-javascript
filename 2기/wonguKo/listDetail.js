const heartBtn = document.getElementById("likeBtn");
let isHeart = false;

heartBtn.addEventListener("click", function () {
  if (isHeart === false) {
    heartBtn.style.color = "tomato";
    heartBtn.style.fontWeight = "900";
    isHeart = true;
  } else {
    heartBtn.style.color = "#c8c9c4";
    heartBtn.style.fontWeight = "";
    isHeart = false;
  }
});

const reviewBox = document.querySelector(".inputReview");
const reviewList = document.querySelector(".reviewBox");

reviewBox.addEventListener("keyup", function (event) {
  const userReview = reviewBox.value;

  const commentEl = document.createElement("p");
  commentEl.classList.add("reviewDetail");
  commentEl.innerHTML = userReview;

  const commentWrap = document.createElement("div");
  commentWrap.classList.add("reviewDetailWrap");
  commentWrap.appendChild(commentEl);

  if (event.key === "Enter") {
    reviewList.appendChild(commentWrap);
    reviewBox.value = "";
  }
});
