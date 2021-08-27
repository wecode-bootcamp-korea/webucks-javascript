const heart = document.querySelector(".far");

let isHeart = false;

const turnRed = () => {
    if(isHeart) {
      heart.classList.remove('redHeart');
      isHeart = false;
    }
    else {
      heart.classList.add('redHeart');
      isHeart = true;
    }
}

heart.addEventListener("click", turnRed);

const reviewForm = document.getElementById("review-form");
const reviewInput = document.querySelector("#review-form input");
const reviewList = document.getElementById("review-list");

const addReview = (review) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerHTML = review;
  reviewList.appendChild(li);
}

const handleReviewSubmit = (event) => {
  event.preventDefault();
  const newReview = reviewInput.value;
  reviewInput.value = '';
  addReview(newReview);
}

reviewForm.addEventListener('submit', handleReviewSubmit);




