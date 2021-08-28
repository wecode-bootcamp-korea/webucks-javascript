// 하트 채우기 이벤트
const heartIcon = document.getElementById('heartIcon');

const fillHeartIcon = () => {
  heartIcon.classList.toggle('fillHeartIconColor')
}

heartIcon.addEventListener("click", fillHeartIcon);

// 리뷰달기 이벤트

const sendReview = (event) => {
  let userReviewContents = event.target.value;
  const reviewStatus =  document.getElementById('reviewStatus');
  const reviewList = document.createElement('li')
  const userId = document.createElement('span');
  const reviewContents = document.createElement('span');
  reviewContents.classList.add('reviewContents')

  if (event.key==='Enter') {
    event.preventDefault();
    reviewList.prepend(userId);
    reviewContents.innerText = userReviewContents;
    reviewList.appendChild(reviewContents);
    reviewStatus.appendChild(reviewList);
    return reviewInputBox.value = ""
  } 
}
reviewInputBox.addEventListener('keydown', sendReview)


