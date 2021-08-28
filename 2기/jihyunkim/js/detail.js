const likeButton = document.querySelector("#heart");
likeButton.addEventListener("click", fillHeart)
function fillHeart() {
  likeButton.classList.toggle("fas");
}

const reviewInput = document.querySelector("#review-input");
reviewInput.addEventListener("keydown", addReview);
let reviews = document.querySelector(".reviews");

function addReview(event) {
  if(window.event.keyCode === 13){
    event.preventDefault();
    addReviewList();
    reviewInput.value = "";
  }
}

function addReviewList(){
  const newReview = document.createElement("li");
  newReview.innerText = reviewInput.value;
  reviews.appendChild(newReview);
}
