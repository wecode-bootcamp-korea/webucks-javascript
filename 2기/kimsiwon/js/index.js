// 돔요소 변수지정 및 변수선언
const id = document.querySelector('input.id');
const pwd = document.querySelector('.pwd');
const btn = document.querySelector('.btn');
const eye = document.querySelector('.eye');
let nInclude = false;
let moreThan8 = false;

// 로그인 조건 만족여부 체크 
function loginActiveCheck() {
    if(nInclude && moreThan8){
            btn.classList.add('btn-active');
            id.classList.add('greenLight');
            pwd.classList.add('greenLight');
        } else if(nInclude && !moreThan8){
            id.classList.add('greenLight');
            pwd.classList.remove('greenLight');
            btn.classList.remove('btn-active');
        } else if(!nInclude && moreThan8) {
            id.classList.remove('greenLight');
            pwd.classList.add('greenLight');
            btn.classList.remove('btn-active');   
        } else {
            id.classList.remove('greenLight');
            pwd.classList.remove('greenLight');
            btn.classList.remove('btn-active');   
        }  
    } 

// 아이디 조건 체크
function idKeyupHandler(){
    loginActiveCheck();
    // 미션 6 풀이 이메일 형식체크
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if(id.value.match(regEmail)){
        nInclude = true;
    } else nInclude = false;

    // 기존 미션 2 풀이
    // if(id.value.indexOf('@') !== -1)
    // nInclude = true;
    // else nInclude = false;
    loginActiveCheck(); 
}

// 비밀번호 조건 체크
function pwdKeyupHandler(e){
    loginActiveCheck();    
    // 미션 6 풀이 비밀번호 형식체크
    const regPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[$@$!%*?&]).{8,}$/gm
    
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
    
    if(pwd.value.match(regPwd)){
        moreThan8 = true;
    } else moreThan8 = false;

    // 기존 미션 2 풀이
    // if(pwd.value.length>=8)
    // moreThan8 = true;
    // else moreThan8 = false;

    loginActiveCheck();
    // 비밀번호 창에서 엔터치면 로그인 기능
    return e.key === "Enter" ? goToList() : null;
}

// 비밀번호 숨기기 기능
function pwdHide (e){
    if(e.target.classList.contains('fa-eye-slash')){
        pwd.type = "text";
        e.target.classList.replace('fa-eye-slash','fa-eye');
    } else {
        pwd.type = "password";
        e.target.classList.replace('fa-eye','fa-eye-slash');
    }
}




// 리스트페이지 이동 함수
function goToList(){
    if(nInclude && moreThan8)
        window.location.href = 'list.html'
}







// 이벤트 핸들러
id.addEventListener("keyup", idKeyupHandler);
pwd.addEventListener("keyup", pwdKeyupHandler);
eye.addEventListener("click", pwdHide);