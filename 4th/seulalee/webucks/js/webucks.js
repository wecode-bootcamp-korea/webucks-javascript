// 변수 지정
let inputBox = document.querySelectorAll('.input-box');

const inputId = document.getElementById('inputId'),
    inputPw = document.getElementById('inputPw'),
    loginBtn = document.getElementById('loginBtn');
const idLength = inputId.value.length;

//input text 입력 시 백그라운드 변경, 아이디와 pw 값 체크
(inputId.value.length > 0) ? inputId.parentNode.style.backgroundColor = '#fff': inputId.parentNode.style.backgroundColor = '#efefef';
loginBtn.disabled = true;

inputBox.forEach((item, index) => {
    let inputText = inputBox[index].firstElementChild;

    inputText.addEventListener('keyup', e => {
        const changeInputBgColor = () => {
            let inputBgColor = e.target.parentNode.style; 
            
            if (!!e.target.value > 0) {
                inputBgColor.backgroundColor = "#fff";
                if (inputId.value.includes('@') && inputPw.value.length >= 8) {
                    loginBtn.disabled = false;
                }
            } else {
                inputBgColor.backgroundColor = '#efefef';
                loginBtn.disabled = true;
            }
        }
        changeInputBgColor();
    });
});


//login btn 작동
function goUrl() {
    let link = 'coffeelist.html';
    location.href = link;
}
loginBtn.addEventListener('click', goUrl);
document.onkeyup = function (e) {
    let keyCode = e.keyCode;
    if (keyCode === 13) goUrl();
}

