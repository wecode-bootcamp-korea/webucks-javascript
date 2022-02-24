const heart = document.getElementsByTagName('i')[0];
const reviewInput = document.getElementsByClassName('rvInput')[0];

function classChange (target, current, change) {
    target.classList.replace(current, change)
};

function heartOnOff () {
    if (heart.classList.contains('fa-regular')) {
        classChange(heart, 'fa-regular', 'fa-solid');
        classChange(heart, 'btnOff', 'btnOn');
    } else {
        classChange(heart, 'fa-solid', 'fa-regular');
        classChange(heart, 'btnOn', 'btnOff');
    }
};

function submit () {
    const reviewBox = document.getElementsByClassName('rvContents')[0];
    
    const reviewTool = document.createElement('div')
    reviewTool.classList.add('aRv');
    
    const reviewName = document.createElement('span');
    reviewName.classList.add('rvId')
    
    const reviewText = document.createElement('p');
    reviewText.classList.add('rvText')
    
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