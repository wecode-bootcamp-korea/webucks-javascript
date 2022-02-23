const likes = document.querySelector('#coffeeDetails__like')

function likethis() {
    if (likes.innerText == "🤍") {
        likes.innerText = "💝"
    } else {
        likes.innerText = "🤍"
    }
}

likes.addEventListener('click', likethis)