// 하트
const empty_heart = document.querySelector('.far');
const red_heart = document.querySelector('.fas');


empty_heart.addEventListener('click', () => {
    empty_heart.style.display = "none";
    red_heart.style.display = "block";
});

red_heart.addEventListener('click', () => {
    empty_heart.style.display = "block";
    red_heart.style.display = "none";
});
//////////////////////////////////////////////////////

const reviews = document.querySelector('.reviews');
const review_enter = document.querySelector('.explain7_explain');

const review = document.querySelector('.explain7_explain');


review.addEventListener('keyup', () => {
    const review_value = document.querySelector('.explain7_explain').value;
    console.log(review_value)
})

review_enter.addEventListener('keydown', (e) => {
    const review_value = document.querySelector('.explain7_explain').value;
    if(e.keyCode === 13){
        //e.key === 'Enter'
        // e.preventDefault();
        review.value = null; // 입력했던 텍스트값 초기화.

        const ID = prompt('ID를 입력하세요.');

        const div = document.createElement('div');  // 리뷰를 감싸줄 div 태그 생성
        const span_ID = document.createElement('span') // 리뷰 아이디를 감싸줄 span 태그 생성
        const span_content = document.createElement('span');// 리뷰 내용을 감싸줄 span 태그 생성
        
        // div.innerHTML = document.getElementsByClassName('review').innerHTML; 
        // span_ID.innerHTML = document.getElementsByClassName('review_id').innerHTML 
        // span_content.innerHTML = document.getElementsByClassName('review_content').innerHTML; 

        div.setAttribute("class", "review"); // 리뷰를 감싸줄 div에 클래스명 지정.
        span_ID.setAttribute("class", "review_id"); // 리뷰 아이디를 감싸줄 span 태그에 클래스명 지정
        span_content.setAttribute("class", "review_content"); // 리뷰 내용을 감싸줄 span 태그에 클래스명 지정

        reviews.appendChild(div);
        div.appendChild(span_ID);
        div.appendChild(span_content);

        span_ID.innerText = ID; // ID 입력
        span_content.innerText = review_value; // 리뷰내용 입력

    }
})



