const likeButton = document.getElementsByTagName("i")[0];
const commentAdd = document.getElementsByClassName("reviewLog")[0];
const commentArea = document.getElementsByClassName("commentArea")[0];
// const reviewLikeButton = document.querySelector("#commentArea");
const testControlBtn = commentArea.querySelectorAll(".commentUnit");

likeButton.addEventListener("click", () => {
  if (likeButton.className === "fa-regular fa-heart") {
    likeButton.className = "fa-solid fa-heart";
  } else {
    likeButton.className = "fa-regular fa-heart";
  }
});

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
    heartButton.style.fontSize = "small";
    heartButton.innerHTML = "&nbsp";
    deleteButton.className = "fa-solid fa-xmark";
    deleteButton.style.fontSize = "small";
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

// reviewLikeButton.addEventListener("click", function (e) {
//   if (e.target.className.includes("fa-heart")) {
//     if (e.target.className === "fa-regular fa-heart") {
//       e.target.className = "fa-solid fa-heart";
//     } else {
//       e.target.className = "fa-regular fa-heart";
//     }
//   }
// });

testControlBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.className.includes("fa-heart")) {
      if (e.target.className === "fa-regular fa-heart") {
        e.target.className = "fa-solid fa-heart";
      } else {
        e.target.className = "fa-regular fa-heart";
      }
    }
  });
});

reviewLikeButton.addEventListener("click", function (e) {
  if (e.target.className.includes("fa-xmark")) {
    commentArea.removeChild(e.target["parentElement"]);
  }
  return;
});

// }); // 정적으로 한가지 모든 클래스에 이벤트리스너를 추가할 때
// testControlBtn.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     if (e.target.className.includes("fa-heart")) {
//       if (e.target.className === "fa-regular fa-heart") {
//         e.target.className = "fa-solid fa-heart";
//       } else {
//         e.target.className = "fa-regular fa-heart";
//       }
//     }
//   });
// });
// 메모리를 덜 차지하긴 한다.

// 문제 1
// for in 사용하여 하트 버튼을 활성화 시켰지만 첫번째 i 태그만 중복되어 작동되는 점
// 배열로 만들어서 forEach를 사용? // 일단 검색으로 해결

// 문제 2
// 새로운 댓글이 업데이트 되고 난 이후에 생성된 버튼들에 js가 적용되지 않는점.
// updated Element eventListener?
// 해결. forEach를 사용하지 않는다. 상위의 컨테이너 + clickevent의 e.target을 이용한다.

// 문제 3 삭제버튼 구현 해결
// 상위.removeChild()
// commentArea + e.target
// removeChild() 조합과 [parentsElement]를 사용하였다.

// "addEventListener bubbling 복습하기" -> 동적으로 이벤트 헨들러 적용
