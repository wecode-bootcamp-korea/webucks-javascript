//id에 @가 포함되고, password가 8자 이상이 되면 버튼이 활성화 되도록 해주세요.

const login = document.getElementById('loginButton');
const pwInput = document.getElementById('password');
const idInput = document.getElementById('userName');

function activeBtn() {
    if (idInput.value.includes('@') && pwInput.value.length > 7) {
        login.style.backgroundColor = "#61ADED"; 
        login.disabled = false;
        login.style.cursor = 'pointer';
    } 
    else {login.style.backgroundColor = "#ADD3EB"; 
         login.disabled = true;}
}


pwInput.addEventListener('keyup',activeBtn)
idInput.addEventListener('keyup',activeBtn)
