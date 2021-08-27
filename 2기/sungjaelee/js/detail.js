const likeBtn = document.querySelector(".likeBtn");
const newReviewForm = document.querySelector("#newReviewForm");
const addedReview = document.querySelector("#addedReview");

console.log("likeBtn", likeBtn);
console.log("newReviewForm", newReviewForm);
console.log("addedReview", addedReview);

let liked = false;

function handleLike() {
  if (!liked) {
    liked = true;
    likeBtn.className = "likeBtn fas fa-heart";
    console.log("Liked!");
  } else {
    liked = false;
    likeBtn.className = "likeBtn far fa-heart";
    console.log("Unliked...");
  }
}

function handleReview(event) {
  // if (event.key === "Enter") {
  //   addedReview.children[0].innerHTML = "codekim";
  //   addedReview.children[1].innerHTML = newReviewForm.value;
  // }
  addedReview.children[0].innerHTML = "codekim";
  addedReview.children[1].innerHTML = newReviewForm[0].value;
  newReviewForm[0].value = "";
  // newReviewForm.tabIndex = -1;
  // newReviewForm.focus();
}

likeBtn.addEventListener("click", handleLike);
newReviewForm.addEventListener("submit", handleReview);
