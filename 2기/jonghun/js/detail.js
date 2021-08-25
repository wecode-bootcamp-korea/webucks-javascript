const commentForm = document.querySelector(".comment__form");
const commentWriter = document.querySelector(".comment__writer");
const commentDesc = document.querySelector(".comment__desc");
const detailComments = document.querySelector(".detail__comments");
const commentInput = document.querySelector(".detail__comment-input");
const titleLike = document.querySelector(".title__like");
const detailImg = document.querySelector(".detail__img");
const titleTitle1 = document.querySelector(".title__title1");
const emptyHeart = titleLike.querySelector(".heart-empty");
const fullHeart = titleLike.querySelector(".heart-full");

let getRawComment;

window.addEventListener("DOMContentLoaded", function () {
  getRawComment = JSON.parse(localStorage.getItem("comments"));
  const { index, img, title, isGetHeart } = JSON.parse(
    localStorage.getItem("detail")
  );
  titleTitle1.innerText = title;
  detailImg.src = img;
  paintHeart(isGetHeart);
  titleLike.addEventListener("click", function () {
    const data = JSON.parse(localStorage.getItem("coffees1"));
    const curHeart = !data[index].isGetHeart;
    data[index].isGetHeart = curHeart;

    localStorage.setItem("coffees1", JSON.stringify(data));
    localStorage.setItem("detail", JSON.stringify({ ...data[index], index }));
    paintHeart(curHeart);
  });
  paintComments();
});

function paintHeart(isGetHeart) {
  if (isGetHeart) {
    emptyHeart.classList.add("none");
    fullHeart.classList.add("show");
  } else {
    emptyHeart.classList.remove("none");
    fullHeart.classList.remove("show");
  }
}

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

function getHeart(index) {
  getRawComment[index].isGetHeart = !getRawComment[index].isGetHeart;
  localStorage.setItem("comments", JSON.stringify(getRawComment));
  paintComments();
}
