const id = document.getElementsByClassName('login-form__id')[0];
const pw = document.getElementsByClassName('login-form__pw')[0];
const btn = document.getElementsByClassName('login-form__btn')[0];

let loginHandler = () => {
    if(id.value.includes('@') && pw.value.length > 7) {
        btn.style.backgroundColor = '#0095F6';
        btn.style.cursor = 'pointer';
    }
};

id.addEventListener('keyup', loginHandler);
pw.addEventListener('keyup', loginHandler);