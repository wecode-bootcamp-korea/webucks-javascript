const heartBtn = document.getElementsByTagName("button")[0];
const reviewForm = document.getElementsByClassName("reviews")[0];
const reviewContainer = document.querySelector(".reviewContainer");
const reviewInput = document.querySelector(".review-input");

/*-------------클릭------------------*/
//클릭하면 버튼 색 바뀜
function btnColorChangeHandler() {
  heartBtn.style.color === "lightcoral"
    ? (heartBtn.style.color = "gray")
    : (heartBtn.style.color = "lightcoral");
  heartBtn.style.opacity === 1
    ? (heartBtn.style.opacity = 0.8)
    : (heartBtn.style.opacity = 1);
}

/*--------------리뷰----------------*/
//리뷰 받기
function reviewHandler(event) {
  event.preventDefault();
  drawHtml(reviewInput.value);
  reviewInput.value = "";
}

//review html 그리기
function drawHtml(text) {
  const review = document.createElement("div");
  const spanId = document.createElement("span");
  const spanText = document.createElement("span");
  spanId.className = "user-id";
  spanText.className = "text";
  review.className = "review";
  spanId.innerHTML = randomIdgenerator();
  spanText.innerHTML = text;
  review.append(spanId);
  review.append(spanText);
  reviewContainer.append(review);
}

//random number Id 만들기
function randomIdgenerator() {
  return `익명${Math.floor(Math.random() * 10000)} `;
}

heartBtn.addEventListener("click", btnColorChangeHandler);
reviewForm.addEventListener("submit", reviewHandler);
