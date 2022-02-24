const likeButton = document.getElementsByTagName("i")[0];
const commentArea = document.getElementsByClassName("commentArea")[0];
const commentButtons = document.querySelector(".commentArea");
const reviewWrite = document.getElementsByClassName("reviewWrite")[0];
const commentAdd = document.getElementsByClassName("reviewLog")[0];

// 상단 like 버튼 클릭 시 변경
likeButton.addEventListener("click", () => {
  if (likeButton.className === "fa-regular fa-heart") {
    likeButton.className = "fa-solid fa-heart";
    likeButton.style.color = "#b80000";
  } else {
    likeButton.className = "fa-regular fa-heart";
    likeButton.style.color = "initial";
  }
});

// comment 작성
reviewWrite.addEventListener("keypress", function comment(input) {
  if (input.key === "Enter") {
    if (commentAdd.value === "") {
      alert("리뷰를 작성해주세요");
      return;
    }

    if (document.getElementsByClassName("reviewID")[0].value === "") {
      alert("Id를 입력해주세요");
      return;
    }

    alertIdComment();
    const commentUnit = document.createElement("div");
    commentUnit.className = "commentUnit";
    addId(commentUnit);
    addComment(commentUnit);
    addHeart(commentUnit);
    addDelete(commentUnit);
    addLineChange(commentUnit);
    commentArea.appendChild(commentUnit);
    commentAdd.value = "";
  }
});

// 작성된 comment에 작성자 ID 추가 함수
function addId(target) {
  const commentId = document.getElementsByClassName("reviewID")[0];
  const newId = document.createElement("span");
  newId.innerHTML = commentId.value + " ";
  newId.style.fontWeight = "700";
  target.appendChild(newId);
  commentId.value = "";
}

// 작성된 리뷰 코멘트의 input 추가 함수
function addComment(target) {
  const commentContent = commentAdd.value;
  const newComment = document.createElement("span");
  newComment.innerHTML = commentContent;
  target.appendChild(newComment);
}

// 작성된 comment에 하트 버튼 추가 함수
function addHeart(target) {
  const heartButton = document.createElement("i");
  heartButton.className = "fa-regular fa-heart";
  target.appendChild(heartButton);
}

// 작성된 comment에 삭제 버튼 추가 함수
function addDelete(target) {
  const deleteButton = document.createElement("i");
  deleteButton.className = "fa-solid fa-xmark";
  target.appendChild(deleteButton);
}

// 작성된 comment에 줄 바꾸기 태그 추가 함수
function addLineChange(target) {
  const lineChange = document.createElement("br");
  target.appendChild(lineChange);
}

// comment, Id 미입력시 alert 호출 함수
function alertIdComment() {
  const commentId = document.getElementsByClassName("reviewID")[0].value;
  if (commentAdd.value === "") {
    alert("리뷰를 작성해주세요");
  }
  if (commentId === "") {
    alert("Id를 입력해주세요");
  }
}

// comment 하트 기능
commentButtons.addEventListener("click", function (e) {
  if (e.target.className.includes("fa-heart")) {
    if (e.target.className === "fa-regular fa-heart") {
      e.target.className = "fa-solid fa-heart";
    } else {
      e.target.className = "fa-regular fa-heart";
    }
  }
});

// comment 삭제 기능
commentButtons.addEventListener("click", function (e) {
  if (e.target.className.includes("fa-xmark")) {
    commentArea.removeChild(e.target["parentElement"]);
  }
  return;
});
