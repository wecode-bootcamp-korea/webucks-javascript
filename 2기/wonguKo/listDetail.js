const heartBtn = document.getElementById("likeBtn");
const reviewId = document.querySelector(".inputReviewId");
const reviewText = document.querySelector(".inputReviewText");
const inputBtn = document.querySelector(".ReviewSubmit");
const reviewList = document.querySelector(".reviewBox");
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

reviewId.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    reviewText.focus();
  } else {
    return;
  }
});

reviewText.addEventListener("keyup", function (event) {
  const userId = reviewId.value;
  const userReview = reviewText.value;

  const userEl = document.createElement("p");
  userEl.classList.add("reviewer");
  userEl.innerHTML = userId;

  const commentEl = document.createElement("p");
  commentEl.classList.add("reviewDetail");
  commentEl.innerHTML = userReview;

  const removeBtn = document.createElement("i");
  removeBtn.className = "fas fa-trash-alt";

  const commentWrap = document.createElement("div");
  commentWrap.classList.add("reviewDetailWrap");
  commentWrap.appendChild(userEl);
  commentWrap.appendChild(commentEl);
  commentWrap.appendChild(removeBtn);

  if (event.key === "Enter") {
    reviewList.appendChild(commentWrap);
    reviewText.value = "";
    reviewId.value = "";
  }
});

inputBtn.addEventListener("click", function (e) {
  const userId = reviewId.value;
  const userReview = reviewText.value;

  const userEl = document.createElement("p");
  userEl.classList.add("reviewer");
  userEl.innerHTML = userId;

  const commentEl = document.createElement("p");
  commentEl.classList.add("reviewDetail");
  commentEl.innerHTML = userReview;

  const removeBtn = document.createElement("i");
  removeBtn.className = "fas fa-trash-alt";

  const commentWrap = document.createElement("div");
  commentWrap.classList.add("reviewDetailWrap");
  commentWrap.appendChild(userEl);
  commentWrap.appendChild(commentEl);
  commentWrap.appendChild(removeBtn);

  reviewList.appendChild(commentWrap);
  reviewText.value = "";
  reviewId.value = "";
});

reviewList.addEventListener("click", function (event) {
  const reviewTarget = event.target.classList.value;

  if (reviewTarget === "fas fa-trash-alt") {
    event.target.closest(".reviewDetailWrap").remove();
  }
});
