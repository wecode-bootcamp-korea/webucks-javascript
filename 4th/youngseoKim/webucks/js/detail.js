//커피에 좋아요 버튼을 누르는 기능
const fa_heart = document.getElementsByClassName("fa-heart")[0];

fa_heart.addEventListener("click", () => {
  if (fa_heart.className === "fa-regular fa-heart") {
    fa_heart.className = "fa-solid fa-heart";
  } else {
    fa_heart.className = "fa-regular fa-heart";
  }
});

//댓글 기능
const input_review = document.getElementsByClassName("review_input")[0];
const review_text = document.getElementById("review_text");
const review_list = document.getElementsByClassName("review_content")[0];

input_review.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    //아이디 입력
    const text_id = prompt("아이디를 입력해주세요:");
    const new_li = document.createElement("li");
    new_li.className = "review_list";
    const new_id = document.createElement("div");
    new_id.className = "id";
    new_id.innerHTML = text_id;
    new_li.appendChild(new_id);
    //text
    const new_text = document.createElement("div");
    new_text.className = "review";
    new_text.innerHTML = review_text.value;
    new_li.appendChild(new_text);

    //하트 넣기
    const heart = document.createElement("i");
    heart.className = "fa-regular fa-heart";
    new_li.appendChild(heart);
    //쓰레기통 넣기
    const trash_can = document.createElement("i");
    trash_can.className = "fa-solid fa-trash-can";
    new_li.appendChild(trash_can);

    //마지막에 다 넣기
    review_list.appendChild(new_li);

    //input box 초기화
    review_text.value = "";
  }
});
const review_content = document.getElementsByClassName("review_content")[0];
// //댓글 하트, 삭제
review_list.addEventListener("click", (e) => {
  //하트 색 바꾸기
  if (
    e.target.className === "fa-regular fa-heart" ||
    e.target.className === "fa-solid fa-heart"
  ) {
    if (e.target.className === "fa-regular fa-heart") {
      e.target.className = "fa-solid fa-heart";
    } else {
      e.target.className = "fa-regular fa-heart";
    }
  }
  //삭제 하기
  if (e.target.className === "fa-solid fa-trash-can") {
    review_content.removeChild(e.path[1]);
  }
});
