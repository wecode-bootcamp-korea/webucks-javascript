const hearts = document.querySelectorAll('i.fa-heart');
const trashes = document.querySelectorAll('i.fa-trash-can');
const reviewInput = document.getElementsByClassName('rvInput')[0];

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

// review remove
trashes.forEach(trash => {
    trash.addEventListener('click', () => {
        trash.parentElement.remove();
    })
})



function submit () {
    const reviewBox = document.getElementsByClassName('rvContents')[0];
    
    const reviewTool = document.createElement('div')
    reviewTool.classList.add('aRv');
    
    const reviewName = document.createElement('span');
    reviewName.classList.add('rvId')
    
    const reviewText = document.createElement('span');
    reviewText.classList.add('rvText', 'bugFix')

    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fa-regular', 'fa-heart', 'btnOff', 'bugFix');

    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash-can');

    
    reviewName.innerHTML = prompt('아아디를 입력해주세요.', 'customer');
    reviewText.innerHTML = reviewInput.value;

    reviewTool.appendChild(reviewName);
    reviewTool.appendChild(reviewText);
    reviewTool.appendChild(heartIcon);
    reviewTool.appendChild(trashIcon);
    
    reviewBox.appendChild(reviewTool);

    heartIcon.addEventListener('click', () => {
        if(heartIcon.classList.contains("fa-regular")) {
            heartIcon.className = "fa-solid fa-heart btnOn bugFix";
        } else {
            heartIcon.className = "fa-regular fa-heart btnOff bugFix";
        }
    })

    trashIcon.addEventListener('click', () => {
        trashIcon.parentElement.remove();
    })
};

reviewInput.addEventListener('keyup', (e) => {
    if(reviewInput.value && e.key == 'Enter') {
        submit();
        reviewInput.value = '';
    }
});