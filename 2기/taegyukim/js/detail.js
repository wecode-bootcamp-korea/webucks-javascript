let heart = document.querySelector(".far");
let isHeart = false;

let turnRed = () => {
    if(isHeart === false) {
        heart.style.color = "red";
        heart.style.opacity = 0.6;
        heart.style.fontWeight = "900";
        isHeart = true;
    }
    else {
        heart.style.color = '';
        heart.style.fontWeight='';
        isHeart = false;
    }
}

heart.addEventListener("click", turnRed);

const reviewForm = document.getElementById("review-form");
const reviewInput = document.querySelector("#review-form input");
const reviewList = document.getElementById("review-list");

function addReview(review) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML = review;
    reviewList.appendChild(li);
}

function handleReviewSubmit(event) {
    event.preventDefault();
    const newReview = reviewInput.value;
    reviewInput.value = '';
    addReview(newReview);
}

reviewForm.addEventListener('submit', handleReviewSubmit);




