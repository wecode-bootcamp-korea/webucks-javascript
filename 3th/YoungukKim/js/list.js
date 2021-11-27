let heart = document.getElementsByClassName("heart3");




for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", () => {
        if (heart[i].innerHTML === '<i class="far fa-heart"></i>') {
            heart[i].innerHTML = '<i class="fas fa-heart"></i>';

        }

        else {
            heart[i].innerHTML = '<i class="far fa-heart"></i>';
        }
        console.log(heart[i].innerHTML);
    });
}


