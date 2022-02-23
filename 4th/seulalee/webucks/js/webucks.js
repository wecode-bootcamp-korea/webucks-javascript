// 변수 지정
let inputBox = document.querySelectorAll('.input-box');

const inputId = document.getElementById('inputId'),
    inputPw = document.getElementById('inputPw'),
    loginBtn = document.getElementById('loginBtn');
const idLength = inputId.value.length;

//01-1.input 새로고침 후 id 입력칸에 값이 있을 시 인풋 백그라운드 색 변경
(inputId.value.length > 0) ? inputId.parentNode.style.backgroundColor = '#fff': inputId.parentNode.style.backgroundColor = '#efefef';
loginBtn.disabled = true;

//01-2.input 창에 key event 발생시 background 변경
inputBox.forEach((item, index) => {
    let inputText = inputBox[index].firstElementChild;

    inputText.addEventListener('keyup', e => {
        const changeInputBgColor = () => {
            let inputBgColor = e.target.parentNode.style; //backgroundColor까지 변수로 지정할경우 백그라운드 컬러를 잡아내지 못함
            if (!!e.target.value > 0) {
                //20번째줄 !!이 없으면 작동하지 않음.
                inputBgColor.backgroundColor = "#fff";
                //01-3.id 창에 @이 포함되고, 비밀번호가 8자 이상인지 체크
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


//02. enter key누르면 login btn 작동
function goUrl() {
    let link = 'coffeelist.html';
    location.href = link;
}
loginBtn.addEventListener('click', goUrl);
document.onkeyup = function (e) {
    let keyCode = e.keyCode;
    if (keyCode === 13) goUrl();
}

/*잘못된 코드 예시로 남겨놓기
const goUrl = () => {
    //e.preventdefault();
    window.location.href = 'coffeelist.html';
    /*if (window.event.keycode == 13) {
        window.location.href = 'coffeelist.html';
    }
}*/