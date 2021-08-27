const heartIcon = document.getElementById('heartIcon');

const fillHeartIcon = () => {
  if(heartIcon.style.color === 'tomato'){
    return heartIcon.style.color = 'gray'
  } else {
    return heartIcon.style.color = 'tomato'
  }
}
heartIcon.addEventListener("click", fillHeartIcon);

const reviewInputBox = document.getElementById('reviewInputBox');
const reviewStatus =  document.getElementById('reviewStatus');
const reviewList = document.createElement('li')
const userId = document.createElement('span');
const reviewContents = document.createElement('span');
reviewList.classList.add('reviewList');
userId.classList.add('userId');
reviewContents.classList.add('reviewContents');

const sendReview = (event) => {
  const userReviewContents = reviewInputBox.value;
  if (event.code==='Enter') {
    event.preventDefault();
    reviewList.prepend(userId);
    reviewList.appendChild(reviewContents);
    reviewContents.innerText = userReviewContents;
    return reviewStatus.appendChild(reviewList);
  }
}
reviewInputBox.addEventListener('keypress', sendReview)


