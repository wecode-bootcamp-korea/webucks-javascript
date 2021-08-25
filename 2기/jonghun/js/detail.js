const commentForm = document.querySelector(".comment__form");
const commentWriter = document.querySelector(".comment__writer");
const commentDesc = document.querySelector(".comment__desc");
const detailComments = document.querySelector(".detail__comments");
const commentInput = document.querySelector(".detail__comment-input");

let getRawComment;

window.addEventListener("DOMContentLoaded", function () {
  const commentRepository = new CommonData("comments");
  const detailRepository = new CommonData("detail");
  const painter = new Paint([
    "detail__title",
    "detail__img",
    "detail__1-heart-0",
    "detail__2-heart-0",
    "comment__form",
  ]);

  getRawComment = commentRepository.initData;
  const { index, img, title, isGetHeart } = detailRepository.initData[0];

  painter.detailPainter(
    { img, title, index },
    "detail__title",
    "detail__img",
    "detail__1-heart-0",
    "detail__2-heart-0",
    isGetHeart,
    "comment__form"
  );

  paintComments();
});

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  saveComment("일단익명", commentInput.value);
  commentInput.value = "";
  paintComments();
});

function paintComments() {
  getRawComment = JSON.parse(localStorage.getItem("comments"));
  let comments = getRawComment ? getRawComment : [];
  const tags = comments.map((item, index) => {
    const { writer, desc, isGetHeart } = item;
    const tag = `
    <div class="detail__comment">
      <span class="comment__writer">${writer}</span>
      <span class="comment__desc">${desc}</span>
      <div class="hearts">
        <i class="far fa-heart heart-empty ${
          isGetHeart && "none"
        }" onClick="getHeart(${index})" ></i>
        <i class="fas fa-heart red heart-full ${
          isGetHeart && "show"
        }" onClick="getHeart(${index})" ></i>
    </div>
      <button class="del-btn" id=${String(
        index
      )}-2 onClick="delComment(${index})">❌</button>
    </div>`;

    return tag;
  });

  detailComments.innerHTML = tags.join("");
}

function delComment(index) {
  const comments = JSON.parse(localStorage.getItem("comments"));
  comments.splice(index, 1);
  localStorage.removeItem("comments");
  localStorage.setItem("comments", JSON.stringify(comments));
  paintComments();
}

function saveComment(writer, desc, isGetHeart = false) {
  let beforeComment = JSON.parse(localStorage.getItem("comments"));

  if (beforeComment) {
    beforeComment.unshift({ writer, desc, isGetHeart });
  } else {
    beforeComment = [{ writer, desc, isGetHeart }];
  }
  localStorage.setItem("comments", JSON.stringify(beforeComment));
}
