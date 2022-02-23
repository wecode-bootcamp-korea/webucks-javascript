const heart = document.getElementsByTagName('i')[0];

heart.addEventListener('click' , function() {
    if (heart.classList.contains('fa-regular')) {
        heart.classList.replace('fa-regular', 'fa-solid');
        heart.classList.replace('btnOff', 'btnOn');
    } else {
        heart.classList.replace('fa-solid', 'fa-regular');
        heart.classList.replace('btnOn', 'btnOff');
    }
});