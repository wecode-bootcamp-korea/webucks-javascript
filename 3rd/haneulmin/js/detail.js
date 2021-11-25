const dislikeBtn = document.querySelector('.regular');
const likeBtn = document.querySelector('.solid');

dislikeBtn.onclick = function () {
    dislikeBtn.classList.add('hide');
    likeBtn.classList.remove('hide');
}

likeBtn.onclick = function () {
    dislikeBtn.classList.remove('hide');
    likeBtn.classList.add('hide');
}


const commentInput = document.querySelector('.comment');

function uploadComment() {
    const box = document.querySelector(".writeComment");

    const comments = document.createElement("div");
    const userId = document.createElement("span");
    const review = document.createElement("span");

    comments.classList.add("writeComment")
    userId.classList.add("userId");
    review.classList.add("text");

    userId.innerHTML = "luneah ";
    review.innerText = commentInput.value;

    comments.appendChild(userId);
    comments.appendChild(review);
    box.appendChild(comments);
}

//엔터키로 댓글 달기
commentInput.addEventListener("keypress",(e) => {
    if(e.keyCode === 13 && commentInput.value.length !== 0){
        uploadComment();
        commentInput.value = "";
    }
});

