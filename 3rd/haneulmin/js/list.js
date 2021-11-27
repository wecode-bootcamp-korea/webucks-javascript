const like = document.querySelector('.far fa-heart');

like.className = "far fa-heart";
like.onclick = clickHeart;

function clickHeart() {
    const heart = window.event.target;
    if (heart.className == 'far fa-heart') {
        heart.className = 'fas fa-heart';
        heart.style.color = '#c73d3d';
    }
    else {
        heart.className = 'far fa-heart';
        heart.style.color = 'black'
    }
};
