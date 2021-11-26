// iput 태그에 접근
let input = document.getElementsByClassName('innerBox');

// button 태그에 접근
const button = document.getElementById('button');

// 버튼 활성화 기능 함수
function buttonActiv() {
    const id = document.getElementById('id').value; //이메일 input란에 입력되는 값
    const password = document.getElementById('password').value; // pw input란에 입력되는 값
    const button = document.getElementById('button');
    if (id.includes('@') && password.length >= 8) {
        button.style="cursor:pointer";
        button.disabled = false;
    } else {
        // 조건이 다시 불만족 되었을 시에 다시 비활성화 기능
        button.style="cursor:defalt"
        button.disabled = true;
    }
}
// 아이디란에 입력 발생시
input[0].addEventListener('keyup', buttonActiv);

// 비밀번호란에 입력 발생시
input[1].addEventListener('keyup', buttonActiv);


// button 클릭시 디테일 페이지로 이동하는 기능
button.addEventListener('click', function() {
    window.location.href = 'list.html'
})