//댓글 입력 + 삭제 기능
const reviewText = document.querySelector('.reviewText');
const pushBtn = document.querySelector('.push');
const commentsBox = document.querySelector('.commentsBox');

const posting = () => {
    //입력된 댓글 : string length가 0이면 delete버튼 안눌리게 만들어야 함!(미완)
    const text = reviewText.value;
    if (reviewText.value === '') {
        reviewText.focus();
        return;
    };

    //댓글창 리스트로 
    const comment = document.createElement('li');
    comment.setAttribute('class', 'comment');
    //스타일
    comment.style.display = "flex";
    comment.style.marginBottom = "10px"

    //댓글창
    const commentText = document.createElement('span');
    commentText.setAttribute('class', 'commentText');
    commentText.innerHTML = text;
    //스타일
    commentText.style.width = "80%";
    commentText.style.padding = "10px";
    
    //삭제 버튼
    const deleteComment = document.createElement('button');
    deleteComment.setAttribute('class', 'deteleComment');
    deleteComment.innerHTML = 'DELETE';
    deleteComment.addEventListener('click', () => {
        commentsBox.removeChild(comment);
    });
    //스타일
    deleteComment.style.borderStyle = "none";
    deleteComment.style.cursor = "pointer";
    deleteComment.style.borderRadius = "3px";
    deleteComment.style.padding = "5px";
    deleteComment.style.width = "20%";

    commentsBox.appendChild(comment);
    comment.appendChild(commentText);
    comment.appendChild(deleteComment);
    
    reviewText.value = " ";
    reviewText.focus();
};

//클릭
pushBtn.addEventListener('click', () => {
    posting();
});

//엔터
reviewText.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        posting();
    }
    return;
});

//좋아요 버튼 실패한 코드(진행중)
/*
    좋아요 버튼

    const likeBox = document.createElement('span');
    likeBox.setAttribute('class', 'likeBox');

    
    const commentLike = document.createElement('i');
    commentLike.setAttribute('class', 'far fa-heart smallHeart');
    commentLike.setAttribute('onclick', "pushlike(); return false")

    //스타일
    likeBox.style.width = "10%";
    likeBox.style.fontSize = "25px"
    likeBox.style.display = "flex";
    likeBox.style.alignItems = "center";
    likeBox.style.position = "relative";
    commentLike.style.right = '6px';
    commentLike.style.color = "rgb(126, 125, 125)";

    2차 시도

    const likeBox = document.createElement('label');
    likeBox.setAttribute('class', 'likeBox');
    
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    console.log(1);
    const commentLike1 = document.createElement('i');
    commentLike1.setAttribute('class', 'far fa-heart');

    const commentLike2 = document.createElement('i');
    commentLike1.setAttribute('class', 'fas fa-heart heart_checked');

    //스타일
    likeBox.style.width = "10%";
    likeBox.style.fontSize = "25px";
    likeBox.style.color = "rgb(126, 125, 125)";
    likeBox.style.position = "absolute";
    checkbox.style.display = 'none';

    if (checkbox.getAttribute('checked')){
        commentLike2.style.display = "block";
        commentLike2.style.opacity = "1";
    }else {
        commentLike2.style.opacity = "0";
    }

    likeBox.appendChild(commentLike);
    comment.appendChild(likeBox);
*/