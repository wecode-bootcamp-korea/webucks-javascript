const hearts = document.querySelectorAll('i.fa-heart');

// detail 로 넘어가는 함수
function toDetail () {
    window.location.href = "detail.html"
}

// heart on / off
hearts.forEach(heart => {
     heart.addEventListener('click', () => {
        if(heart.classList.contains("fa-regular")) {
            heart.className = "fa-solid fa-heart btnOn";
        } else {
            heart.className = "fa-regular fa-heart btnOff";
        }
    })
});