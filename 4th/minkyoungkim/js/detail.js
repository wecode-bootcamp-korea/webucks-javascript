const heart = document.querySelector('.heart');
function heartBtn(e){
    e.preventDefault();
    heart.innerHTML === '🤍' ? changeColor('❤️') : changeColor('🤍')
}

function changeColor(emoji){
    heart.innerHTML = emoji;
}

heart.addEventListener('click', heartBtn);

