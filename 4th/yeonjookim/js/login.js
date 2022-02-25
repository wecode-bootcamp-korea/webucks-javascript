const loginBtn = document.getElementById('login');
const id = document.getElementById('id')
const pw = document.getElementById('pw')

// 1. if문으로 함수 작성 2. 삼항연산자 사용 3. class에 active로 넣어서 classList로 추가 제거

// 2) form태그에 action이 없는 경우: 콜백함수를 지우려면 익명함수로 쓸 수가 없어서 따로 빼야합니다
// function login() {
//     location.href = "../list.html"
// }

function activateLogin() {
    if (id.value.includes('@') && pw.value.length >= 8) {
        loginBtn.style.opacity = '100%';
        loginBtn.addEventListener('click', login)
    } else {
        loginBtn.style.opacity = '30%';
        loginBtn.removeEventListener('click', login)
    }
}

id.addEventListener('keyup', activateLogin)
pw.addEventListener('keyup', activateLogin)

// 1) form 태그에 action에 주소를 넣거나 
// 2) action이 없다면 기본 동작을 막아야 전부 다 동작합니다!
// loginBtn.addEventListener('click', (event) => {
//     event.preventDefault()
// })
