// 하트 채우기 이벤트
const heartIcon = document.getElementById('heartIcon');

const fillHeartIcon = () => {
  heartIcon.classList.toggle('fillHeartIconColor')
}

heartIcon.addEventListener("click", fillHeartIcon);

// 리뷰달기 이벤트

const contentsInputBox = document.getElementById('contentsInputBox');
const userIdInputBox = document.getElementById('userInputIdBox');

// 좋아요 버튼과 댓글 지우기 버튼

const thumbsUpIcons = document.getElementsByClassName('fas fa-thumbs-up');
const deleteReviewIcons = document.getElementsByClassName('fas fa-backspace');


const sendReview = (event) => {
  // 사용자가 입력한 input의 값을 저장 
  let userReviewContents = event.target.value;
  let userIdContents = userIdInputBox.value;

  // review 리스트 현황 창과 리스트, ID, PWD 태그 생성
  const reviewStatus =  document.getElementById('reviewStatus');
  const reviewList = document.createElement('li')
  const userId = document.createElement('span');
  const reviewContents = document.createElement('span');
  const thumbsUpIcon = document.createElement('span');
  const deleteIcon = document.createElement('span')

  

  // 각각의 태그에 클래스 부여
  reviewList.classList.add('reviewList')
  userId.classList.add('userId');
  reviewContents.classList.add('contentsInputBox');
  

  if (event.key==='Enter') {
    event.preventDefault(); // 키보드 이벤트의 기본 기능을 막아준다.
    // 인풋 창에 입력한 내용을 각 태그 안에 콘텐츠로 넣어준다
    userId.innerText = userIdContents;
    reviewContents.innerText = userReviewContents;
    deleteIcon.innerHTML = '<i class="fas fa-thumbs-up"></i>'
    thumbsUpIcon.innerHTML = '<i class="fas fa-backspace"></i>'
    
    // 리뷰 리스트에 추가한다.
    reviewList.prepend(userId);
    reviewList.appendChild(reviewContents);
    reviewList.appendChild(thumbsUpIcon);
    reviewList.appendChild(deleteIcon)
    if (userIdContents === ""){
      return alert('작성자 명을 입력해주세요')
    } else {
      reviewStatus.appendChild(reviewList);
      userIdInputBox.value = "";
      return contentsInputBox.value = ""      
    }
  } 
}

contentsInputBox.addEventListener('keydown', sendReview)

// 리뷰 댓글 좋아요 누르기 이벤트

function changeFirstThumbsUpIconColor() {
  thumbsUpIcons[0].classList.toggle('fillThumbsUpIcon');
}

function changeSecondThumbsUpIconColor() {
  thumbsUpIcons[1].classList.toggle('fillThumbsUpIcon');
}

function changeThirdThumbsUpIconColor() {
  thumbsUpIcons[2].classList.toggle('fillThumbsUpIcon');
}
