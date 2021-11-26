// 빈하트 눌렀을 때 빨간하트로 바뀌는 기능 구현
const dislikeBtn = document.querySelector('.white');
const likeBtn = document.querySelector('.red');

dislikeBtn.onclick = function () {    // 빈하트 클릭했을 때 
    dislikeBtn.classList.add('hide');  // 빈하트에 .hide 적용
    likeBtn.classList.remove('hide');   // 빨간하트에 적용되어 있던 .hide 삭제
}

// 위의 기능 반대로 구현하여 하트 눌렀다 취소했다 가능하게 함
likeBtn.onclick = function () {
    dislikeBtn.classList.remove('hide');
    likeBtn.classList.add('hide');
}

// 댓글 기능 구현
const commentInput = document.querySelector('.comment');

function uploadComment() {  
    const box = document.querySelector(".writeComment"); // 댓글 전체 요소를 감싸는 박스 생성

    // 댓글 요소 생성
    const comments = document.createElement("div");
    const userId = document.createElement("span");
    const review = document.createElement("span");

    // 해당 댓글 요소가 나타낼 것 html에서 선택
    comments.classList.add("writeComment")
    userId.classList.add("userId");
    review.classList.add("text");
    
    userId.innerHTML = "luneah ";   // userId 지정하여 댓글 달면 ID 칸에 뜨게 함
    review.innerText = commentInput.value;  // input에 들어온 값 불러옴

    // appendChild 속성으로 자식 요소로 추가해줌
    comments.appendChild(userId);
    comments.appendChild(review);
    box.appendChild(comments);
}

//엔터키로 댓글 달기
commentInput.addEventListener("keypress",(e) => {
    if(e.keyCode === 13 && commentInput.value.length !== 0){    // 엔터키를 누르고, input에 들어온 값의 길이가 0이 아닐 때 업로드 가능하게 함
        uploadComment();
        commentInput.value = "";   // 업로드 후 input 칸 공백으로 만듦
    }
});

