// 로그인 버튼 활성화 조건 설정
let input = document.getElementsByClassName('innerBox');

const button = document.getElementById('button');

// 버튼 활성화 함수
function buttonActiv() {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    const button = document.getElementById('button');
    if (id.includes('@') && password.length >= 8) {
        button.style="cursor:pointer";
        button.disabled = false;
    } else {
        button.style="cursor:defalt"
        button.disabled = true;
    }
}
// 아이디란에 입력 발생시
input[0].addEventListener('keyup', buttonActiv);

// 비밀번호란에 입력 발생시
input[1].addEventListener('keyup', buttonActiv);

button.addEventListener('click', function() {
    window.location.href = 'list.html'
})