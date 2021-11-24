let likeBool = false;
const likeSpan = document.getElementsByClassName("like")[0];
// 하트
likeSpan.addEventListener("click", () => {
  if (likeBool === false) {
    likeSpan.innerHTML = "❤️";
    likeBool = true;
  } else {
    likeSpan.innerHTML = "♡";
    likeBool = false;
  }
});

const comment = document.querySelector(".comment");
const input = document.getElementById("commentInput");
//엔터치면 댓글
input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    //감싸는 박스 div
    const commentBox = document.createElement("div");
    commentBox.setAttribute("class", "commentBox");
    //텍스트 추가 span
    const commentText = document.createElement("span");
    commentText.setAttribute("class", "commentText");
    commentText.innerHTML =
      "<b>" + sessionStorage.getItem("id") + "</b>" + " : " + e.target.value;
    //좋아요 span
    const likeBtn = document.createElement("span");
    let likeNum = 0;
    likeBtn.setAttribute("class", "likeBtn");
    likeBtn.innerHTML = `  ❤️ ${likeNum}명`;
    likeBtn.addEventListener("click", () => {
      likeNum++;
      console.log(likeNum);
      likeBtn.innerHTML = ` ➡️ ❤️ ${likeNum}명`;
    });
    //삭제 button
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "deleteBtn");
    deleteBtn.innerHTML = "삭제";
    deleteBtn.addEventListener("click", () => {
      comment.removeChild(commentBox);
    });
    //실제로 달기
    commentText.appendChild(likeBtn);
    commentBox.appendChild(commentText);
    commentBox.appendChild(deleteBtn);
    comment.appendChild(commentBox);

    input.value = "";
  }
});
