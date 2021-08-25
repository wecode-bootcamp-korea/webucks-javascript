const input = document.querySelector('iuput')
const review = document.querySelector('.comments')
input.addEventListener('keydown', (e) => {
    if (e.key === "enter") {
        review.innerHTML += input.value
    }
});


const like = document.querySelector('#like')
like.addEventListener('click', () => {
    if (like.className = 'far fa-heart fa-lg') {
        like.className = 'fas fa-heart fa-lg';
    } else {
        like.className = 'far fa-heart fa-lg'
    }
})
