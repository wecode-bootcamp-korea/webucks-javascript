const heartBtn = document.getElementById("likeBtn");
const likeBtn = document.getElementById("likeReview");
const reviewId = document.querySelector(".inputReviewId");
const reviewText = document.querySelector(".inputReviewText");
const inputBtn = document.querySelector(".ReviewSubmit");
const reviewList = document.querySelector(".reviewBox");
let isHeart = false;
let isLike = false;
let cnt = 4;

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

  console.log(userReview);

  if (userId === "" && userReview === "" && event.key === "Enter") {
    alert("리뷰가 제대로 입력되지 않았습니다. 알맞게 입력해주세요.");
    reviewId.focus();
    return;
  }

  const userEl = document.createElement("p");
  userEl.classList.add("reviewer");
  userEl.innerHTML = userId;

  const commentEl = document.createElement("p");
  commentEl.classList.add("reviewDetail");
  commentEl.innerHTML = userReview;

  const likeButton = document.createElement("i");
  likeButton.className = "far fa-thumbs-up";
  likeButton.setAttribute("id", "likeReview" + cnt);

  const removeBtn = document.createElement("i");
  removeBtn.className = "fas fa-trash-alt";

  const commentWrap = document.createElement("div");
  commentWrap.classList.add("reviewDetailWrap");
  commentWrap.appendChild(userEl);
  commentWrap.appendChild(commentEl);
  commentWrap.appendChild(likeButton);
  commentWrap.appendChild(removeBtn);

  if (event.key === "Enter") {
    if (userId !== "" && userReview !== "") {
      reviewList.appendChild(commentWrap);
      reviewText.value = "";
      reviewId.value = "";
      reviewId.focus();
      return;
      cnt++;
    }
  }
});

inputBtn.addEventListener("click", function (e) {
  const userId = reviewId.value;
  const userReview = reviewText.value;

  if (userId === "" || userReview === "") {
    alert("리뷰가 제대로 입력되지 않았습니다. 알맞게 입력해주세요.");
    reviewId.focus();
    return;
  }

  const userEl = document.createElement("p");
  userEl.classList.add("reviewer");
  userEl.innerHTML = userId;

  const commentEl = document.createElement("p");
  commentEl.classList.add("reviewDetail");
  commentEl.innerHTML = userReview;

  const likeButton = document.createElement("i");
  likeButton.className = "far fa-thumbs-up";
  likeButton.setAttribute("id", "likeReview" + cnt);

  const removeBtn = document.createElement("i");
  removeBtn.className = "fas fa-trash-alt";

  const commentWrap = document.createElement("div");

  if (userId !== "" && userReview !== "") {
    commentWrap.classList.add("reviewDetailWrap");
    commentWrap.appendChild(userEl);
    commentWrap.appendChild(commentEl);
    commentWrap.appendChild(likeButton);
    commentWrap.appendChild(removeBtn);
    reviewList.appendChild(commentWrap);
    reviewText.value = "";
    reviewId.value = "";
    reviewId.focus();
    cnt++;
  }
});

reviewList.addEventListener("click", function (event) {
  const reviewTarget = event.target.classList.value;
  const reviewTargetId = event.target.id;
  const reviewId = document.getElementById(reviewTargetId);

  if (reviewTarget === "fas fa-trash-alt") {
    event.target.closest(".reviewDetailWrap").remove();
  }

  if (reviewTarget === "far fa-thumbs-up") {
    if (isLike === false) {
      reviewId.style.color = "green";
      reviewId.style.fontWeight = "900";
      isLike = true;
    } else {
      reviewId.style.color = "#c8c9c4";
      reviewId.style.fontWeight = "";
      isLike = false;
    }
  }
});
