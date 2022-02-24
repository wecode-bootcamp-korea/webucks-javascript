const inputId = document.getElementsByClassName('id')[0];
const inputPw = document.getElementsByClassName('password')[0];
const loginButton = document.getElementsByClassName('loginButton')[0];


function activateButton() {
    if (inputId.value.includes('@') && inputPw.value.length > 7) {
        loginButton.style.backgroundColor = '#61aded';
        //loginButton.disabled = false;
    } else {
        console.log('로그인버튼 비활성화');
        loginButton.style.backgroundColor = '#add3ea';
        //loginButton.disabled = true;
    };
}

function moveToListPage() {
    if (inputId.value.includes('@') && inputPw.value.length > 7) {
        location.href = "./list.html";

    } else
        return;
}

inputId.addEventListener('keyup',activateButton);
inputPw.addEventListener('keyup',activateButton);
loginButton.addEventListener('click',moveToListPage);



