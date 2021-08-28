const idInput = document.getElementsByClassName('login-form__id')[0];
const pwInput = document.getElementsByClassName('login-form__pw')[0];
const btnInput = document.getElementsByClassName('login-form__btn')[0];

const isValidInput = () => {
    return (idInput.value.includes('@') && pwInput.value.length >= 8);
}

const changeButtonColor = () => {
    if(isValidInput()) {
        btnInput.style.backgroundColor = '#0095F6';
        btnInput.style.cursor = 'pointer';
    } else {
        btnInput.style.backgroundColor = '#B2DFFC';
    }
}


idInput.addEventListener('input', changeButtonColor)
pwInput.addEventListener('input', changeButtonColor)