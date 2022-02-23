const heart = document.getElementsByTagName('i')[0];
const reviewInput = document.getElementsByClassName('reviewInput')[0];

function heartOnOff () {
    if (heart.classList.contains('fa-regular')) {
        heart.classList.replace('fa-regular', 'fa-solid');
        heart.classList.replace('btnOff', 'btnOn');
    } else {
        heart.classList.replace('fa-solid', 'fa-regular');
        heart.classList.replace('btnOn', 'btnOff');
    }
};

function submit () {
    const reviewBox = document.getElementsByClassName('reviewContents')[0];
    
    const reviewTool = document.createElement('div')
    reviewTool.classList.add('aReview');
    
    const reviewName = document.createElement('span');
    
    const reviewText = document.createElement('p');
    reviewText.classList.add('aReivewText')
    
    reviewName.innerHTML = prompt('아아디를 입력해주세요.', 'customer');
    reviewText.innerHTML = reviewInput.value;

    reviewTool.appendChild(reviewName);
    reviewTool.appendChild(reviewText);
    
    reviewBox.appendChild(reviewTool);
};



heart.addEventListener('click', () => heartOnOff() );

reviewInput.addEventListener('keyup', (e) => {
    if(reviewInput.value && e.key == 'Enter') {
        submit();
        reviewInput.value = '';
    }
});