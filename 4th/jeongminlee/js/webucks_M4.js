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

const review_enter = document.querySelector('.explain7_explain');
const review = document.querySelector('.explain7_explain').value;
const reviews = document.querySelector('.reviews');

review_enter.addEventListener('keyup', () => {
    if(review){

    }
})





