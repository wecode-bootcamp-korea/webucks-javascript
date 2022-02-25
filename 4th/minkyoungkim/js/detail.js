const heart = document.querySelector('.heart');
const inputWrapper = document.querySelector('.reivewInput-wrapper');
const reviewInput = document.querySelector('.reviewInput');
const reviewBox = document.querySelector('.review-box');

function heartBtn(e){
    e.preventDefault();
    heart.innerHTML === '🤍' ? changeColor('❤️') : changeColor('🤍')
}

function changeColor(emoji){
    heart.innerHTML = emoji;
}

function getComments(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        let review = reviewInput.value;
        const pTag = document.createElement('p');
        pTag.innerHTML = review;
        reviewBox.appendChild(pTag);    
        reviewInput.value = '';       
    }
  

}

heart.addEventListener('click', heartBtn);
inputWrapper.addEventListener('keyup', getComments)

