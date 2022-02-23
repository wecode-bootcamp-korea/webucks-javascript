//id에 @가 포함되고, password가 8자 이상이 되면 버튼이 활성화 되도록 해주세요.


//로그인과 비밀번호 값을 받아온다 
// 그 값을 조건식을 실행한다. ( 아이디 @포함 및 비밀번호 8자 이상)
// 조건식이 맞으면, 로그인버튼을 활성화한다

//id, password가 조건에 맞을 때 로그인 버튼을 누르면 list 페이지로 이동해야 합니다.

let form = document.getElementById('login-form');
let btn = document.getElementById('loginBtn');


form.addEventListener('keyup', (e)=>{
    e.preventDefault();
    let email = document.getElementById('email').value;
    let pw = document.getElementById('password').value;


    if(email.includes('@') && pw.length > 9){
        btn.style.backgroundColor = '#61ADED';

    }

    btn.addEventListener('click', () => {   
        window.location.href = './list.html'
        }
    )
})

