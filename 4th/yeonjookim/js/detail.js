const likes = document.querySelector('.fas')

const review = document.querySelector('.review')
const reviewInput = document.querySelector('.review__input')


function likethis() {
    likes.classList.toggle('liked')
}

function addReview(e) {
    if (e.key === 'Enter') {
        const reviewChild = document.createElement('div')
        review.appendChild(reviewChild)
        const reviewId = document.createElement('span')
        reviewId.setAttribute('class', 'review__id')
        const reviewText = document.createElement('span')
        reviewText.setAttribute('class', 'review__text')
        reviewChild.appendChild(reviewId)
        reviewChild.appendChild(reviewText)
        reviewId.textContent = 'new_customer'
        reviewText.textContent = reviewInput.value
        reviewInput.value = ""
    }
}


likes.addEventListener('click', likethis)

reviewInput.addEventListener('keyup', addReview)