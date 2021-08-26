//like
const likearea = document.querySelector('.likeArea') 
let click = 0;

likearea.addEventListener('click', () => {
    click += 1;
    const like = document.querySelector('#like');  
    if(click % 2 === 1) {
        like.classList.remove('far');
        like.classList.add('fas');
    } else {
        like.classList.add('far');
        like.classList.remove('fas');
    }
    return click
});

//댓글기능
const reviewText = document.querySelector('.reviewText');
const pushBtn = document.querySelector('.push');
const commentsBox = document.querySelector('.commentsBox');

const posting = () => {
    //입력된 댓글
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
    commentText.style.width = "70%";
    commentText.style.padding = "10px"
    
    //좋아요 버튼
    const likeBox = document.createElement('span');
    likeBox.setAttribute('class', 'likeBox');
    const commentLike = document.createElement('i');
    commentLike.setAttribute('class', 'far fa-heart smallHeart');
    likeBox.addEventListener('click', () => {
        click += 1;
        const smallHeart= document.querySelector('.smallHeart');  
        if(click % 2 === 1) {
            smallHeart.classList.remove('far');
            smallHeart.classList.add('fas');
        } else {
            smallHeart.classList.add('far');
            smallHeart.classList.remove('fas');
        }
        return click
    });
    //스타일
    likeBox.style.width = "10%";
    likeBox.style.fontSize = "25px"
    likeBox.style.display = "flex";
    likeBox.style.alignItems = "center";

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
    deleteComment.style.padding = "5px"
    deleteComment.style.width = "20%"

    //+
    commentsBox.appendChild(comment);
    comment.appendChild(commentText);
    comment.appendChild(likeBox);
    comment.appendChild(deleteComment);
    likeBox.appendChild(commentLike);
    
    
     
   
    
    
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

/*
click += 1;
    const like = document.querySelector('#like');  
    if(click % 2 === 1) {
        like.classList.remove('far');
        like.classList.add('fas');
        document.querySelector('#like').style.color = "rgb(245, 169, 169)";
    } else {

        like.classList.add('far');
        like.classList.remove('fas');
        document.querySelector('#like').style.color = "rgb(233, 233, 233)";
    }
    return click
    */
