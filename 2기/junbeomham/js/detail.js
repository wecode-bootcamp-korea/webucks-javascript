/*
    좋아요 버튼 클릭시, 하트의 색상 변경 기능
*/
const likeBtn = document.querySelector(".like-wrap");

likeBtn.addEventListener('click', function(e) {
    this.style.color = (this.style.color === "tomato") ? "" : "tomato";
});

/*
    리뷰로 댓글 추가하는 기능
*/
const reviewInput = document.querySelector(".review-input");
const reviewList = document.querySelector(".review-list");

reviewInput.addEventListener('keyup', function(e) {
    if(e.key === "Enter" && reviewInput.value !== "") {
        const liTag = document.createElement('li');
        const dlTag = document.createElement('dl');
        const dtTag = document.createElement('dt');
        const ddTag = document.createElement('dd');
        
        const userId = document.cookie
            .split(';')
            .find(el => el.startsWith('userId'))
            .split('=')[1];

        dtTag.innerHTML = userId;
        ddTag.innerHTML = reviewInput.value;

        dlTag.appendChild(dtTag);
        dlTag.appendChild(ddTag);
        liTag.appendChild(dlTag);
        reviewList.appendChild(liTag);
    }
})  