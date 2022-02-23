const likeButton = document.getElementsByTagName("i")[0];
const commentAdd = document.getElementsByClassName("reviewLog")[0];
const commentArea = document.getElementsByClassName("commentArea")[0];
const commentButtons = document.querySelector(".commentArea");

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
commentAdd.addEventListener("keypress", function (input) {
  if (input.key === "Enter") {
    const commentId = prompt("댓글 ID를 입력해주세요");
    const commentUnit = document.createElement("div");
    const inputComment = commentAdd.value;
    const newId = document.createElement("span");
    const newComment = document.createElement("span");
    const heartButton = document.createElement("i");
    const deleteButton = document.createElement("i");
    const lineChange = document.createElement("br");

    commentUnit.className = "commentUnit";
    heartButton.className = "fa-regular fa-heart";
    heartButton.style.fontSize = "medium";
    heartButton.innerHTML = "&nbsp";
    deleteButton.className = "fa-solid fa-xmark";
    deleteButton.style.fontSize = "medium";
    newId.innerHTML = commentId;
    newId.style.fontSize = "small";
    newId.style.fontWeight = "700";
    newComment.innerHTML = ` ${inputComment} `;
    newComment.style.fontSize = "small";
    commentUnit.style.fontFamily = "Noto Sans KR, sans-serif";
    commentUnit.appendChild(newId);
    commentUnit.appendChild(newComment);
    commentUnit.appendChild(heartButton);
    commentUnit.appendChild(deleteButton);
    commentUnit.appendChild(lineChange);
    commentArea.appendChild(commentUnit);
    commentAdd.value = "";
  }
});

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
