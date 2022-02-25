const ID = document.querySelector('.ID');
const Password = document.querySelector('.Password');
const Button = document.querySelector('.Button');

Password.addEventListener('keyup', function(){
    const IDValue = document.querySelector('.ID').value;
    const PasswordValue = document.querySelector('.Password').value;

    if((IDValue.includes('@') === true) && (PasswordValue.length >= 8)){
        Button.style.backgroundColor = 'rgba(97, 173, 237, 1)';
    }
})