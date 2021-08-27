const likeButton = document.querySelector(".like svg");
likeButton.addEventListener("click", fillRed)
function fillRed() {
    likeButton.style.fill = "red";
}

let reviewInput = document.querySelector("#review-input");
reviewInput.addEventListener("keypress", addReview);
let reviews = document.querySelector(".reviews");

function addReview(event) {
    if(event.keycode === 13){
        event.preventDefault();
        reviews.innerText += reviewInput.value;
    }
}