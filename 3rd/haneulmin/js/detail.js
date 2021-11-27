// 빈하트 눌렀을 때 빨간하트로 바뀌는 기능 구현
const dislikeBtn = document.querySelector('.white');
const likeBtn = document.querySelector('.red');

dislikeBtn.onclick = function () {    // 빈하트 클릭했을 때 
    dislikeBtn.classList.add('hide');  // 빈하트에 .hide 적용
    likeBtn.classList.remove('hide');   // 빨간하트에 적용되어 있던 .hide 삭제
};

// 위의 기능 반대로 구현하여 하트 눌렀다 취소했다 가능하게 함
likeBtn.onclick = function () {
    dislikeBtn.classList.remove('hide');
    likeBtn.classList.add('hide');
};

// 댓글 기능 구현
const commentInput = document.querySelector('.comment');

function uploadComment() {  
    const box = document.querySelector(".writeComment"); // 댓글 전체 요소를 감싸는 박스 생성

    // 댓글 요소 생성
    const comments = document.createElement("div");
    const userId = document.createElement("span");
    const review = document.createElement("span");
    const trashBtn = document.createElement("button");
    const dislikeIcon = document.createElement("i");

    // 해당 댓글 요소가 나타낼 것 html에서 선택
    comments.classList.add("writeComment")
    userId.classList.add("userId");
    review.classList.add("text");

    userId.innerHTML = "luneah ";   // userId 지정하여 댓글 달면 ID 칸에 뜨게 함
    review.innerText = commentInput.value;  // input에 들어온 값 불러옴
    trashBtn.setAttribute('class', 'trash1');
    trashBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    dislikeIcon.className = "far fa-heart";
    dislikeIcon.onclick = clickHeart;

    // appendChild 속성으로 자식 요소로 추가해줌
    comments.appendChild(userId);
    comments.appendChild(review);
    comments.appendChild(trashBtn);
    comments.appendChild(dislikeIcon);
    
    box.appendChild(comments);

    function clickHeart() {
        const heart = window.event.target;
        if (heart.className == 'far fa-heart') {
            heart.className = 'fas fa-heart';
            heart.style.color = '#c73d3d';
        }
        else {
            heart.className = 'far fa-heart';
            heart.style.color = '#929292'
        }
    }

    trashBtn.onclick = function (e) {
        box.removeChild(comments);
    };
};

//엔터키로 댓글 달기
commentInput.addEventListener("keypress",(e) => {
    if(e.keyCode === 13 && commentInput.value.length !== 0){    // 엔터키를 누르고, input에 들어온 값의 길이가 0이 아닐 때 업로드 가능하게 함
        uploadComment();
        commentInput.value = "";   // 업로드 후 input 칸 공백으로 만듦
    }
});

const commentBox1 = document.querySelector('.commentText1');
const commentBox2 = document.querySelector('.commentText2');
const commentBox3 = document.querySelector('.commentText3');
const contents1 = document.querySelector('.items1');
const contents2 = document.querySelector('.items2');
const contents3 = document.querySelector('.items3');

const commentDelete1 = document.querySelector('.trash1');
const commentDelete2 = document.querySelector('.trash2');
const commentDelete3 = document.querySelector('.trash3');

commentDelete1.onclick = function (e) {
    commentBox1.removeChild(contents1);
};
commentDelete2.onclick = function (e) {
    commentBox2.removeChild(contents2);
};
commentDelete3.onclick = function (e) {
    commentBox3.removeChild(contents3);
};


// 댓글 좋아요 기능 
const commentDislike1 = document.querySelector('.nonlike1');
const commentDislike2 = document.querySelector('.nonlike2');
const commentDislike3 = document.querySelector('.nonlike3');
const commentLike1 = document.querySelector('.like1');
const commentLike2 = document.querySelector('.like2');
const commentLike3 = document.querySelector('.like3');

commentDislike1.onclick = function () {    
    commentDislike1.classList.add('hide'); 
    commentLike1.classList.remove('hide'); 
};
commentDislike2.onclick = function () {    
    commentDislike2.classList.add('hide'); 
    commentLike2.classList.remove('hide'); 
};
commentDislike3.onclick = function () {    
    commentDislike3.classList.add('hide'); 
    commentLike3.classList.remove('hide'); 
};

// 위의 기능 반대로 구현하여 하트 눌렀다 취소했다 가능하게 함
commentLike1.onclick = function () {
    commentDislike1.classList.remove('hide');
    commentLike1.classList.add('hide');
};
commentLike2.onclick = function () {
    commentDislike2.classList.remove('hide');
    commentLike2.classList.add('hide');
};
commentLike3.onclick = function () {
    commentDislike3.classList.remove('hide');
    commentLike3.classList.add('hide');
};
