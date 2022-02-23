const id = document.querySelector('.id');
const password = document.querySelector('.password');
const button = document.querySelector('.button');

password.addEventListener('keyup', function(){
    const idValue = document.querySelector('.id').value;
    const passValue = document.querySelector('.password').value;

    if((idValue.includes('@') === true) && (passValue.length >= 8)){
        button.style.backgroundColor = 'rgba(97, 173, 237, 1)';
    }

    
})