// 좋아요 버튼 기능
let heart = document.getElementById("heart");
let heartClick = false;

heart.addEventListener("click", function () {
  if (heartClick === false) {
    heart.innerText = "❤️";
    heartClick = true;
  } else {
    heart.innerText = "🤍";
    heartClick = false;
  }
});

// 리뷰 댓글 기능

let yourID = sessionStorage.getItem("ID");
let yourIDLeft = yourID.split("@")[0];

let reviewMessage = document.getElementById("reviewMessage");
let reviewDetail = document.getElementById("reviewDetail");

reviewMessage.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    // div 생성 및 노드 연결
    let reviewDetailPartDiv = document.createElement("div");
    reviewDetail.appendChild(reviewDetailPartDiv);

    let reviewIDDiv = document.createElement("div");
    reviewDetailPartDiv.appendChild(reviewIDDiv);

    let reviewCommentDiv = document.createElement("div");
    reviewDetailPartDiv.appendChild(reviewCommentDiv);
    // div 생성 및 노드 연결 - End

    // class 생성
    let reviewDetailPartClass = document.createAttribute("class");
    reviewDetailPartClass.value = "reviewDetailPart";
    reviewDetailPartDiv.setAttributeNode(reviewDetailPartClass);

    let reviewIDClass = document.createAttribute("class");
    reviewIDClass.value = "reviewID";
    reviewIDDiv.setAttributeNode(reviewIDClass);

    let reviewCommentClass = document.createAttribute("class");
    reviewCommentClass.value = "reviewComment";
    reviewCommentDiv.setAttributeNode(reviewCommentClass);
    // class 생성 - End

    reviewIDDiv.innerText = yourIDLeft;
    reviewCommentDiv.innerText = reviewMessage.value;
  }
});
