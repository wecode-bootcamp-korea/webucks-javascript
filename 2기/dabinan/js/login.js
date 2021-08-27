const pwd = document.querySelector('#pwd');
const user = document.querySelector('#user');
const btn = document.querySelector('.loginBtn');

let isValid = [false, false];

//정규표현식 아이디 체크
const isValidId = (id) => {
    let letters = /^([a-z0-9_]){6,}$/;
    if (letters.test(id)) {
        return true;
    } else {
        return false;
    }
};

//정규표현식 패스워드 체크
const isValidPassword = (password) => {
    let letters = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    if (letters.test(password)) {
        return true;
    } else {
        return false;
    }
};

//로그인 버튼 활성화 비활성화
const enableButton = (arr) => {
    if (arr[0] && arr[1]) {
    btn.removeAttribute("disabled");
    btn.style.backgroundColor = "#2F8BE9";
  } else {
    btn.setAttribute("disabled", true);
    btn.style.backgroundColor = "#add3ea";
  }
};

//id와 pwd 유효하면 border color를 초록색으로
const changeBorderGreen = (valid, box) => {
    if (valid) {
        box.style.borderColor = "#2E865A";
    } else {
        box.style.borderColor = "#dddddd";
    }
};

//아이디 비밀번호 입력되면 유효성 검증 후 로그인 버튼 활성화 + 테두리 초록색으로
document.addEventListener('input', () => {
    isValid[0] = isValidId(user.value) ? true : false;
    isValid[1] = isValidPassword(pwd.value) ? true : false;
    enableButton(isValid);
    changeBorderGreen(isValid[0], user);
    changeBorderGreen(isValid[1], pwd);
});

//커피 리스트 페이지로 이동
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = "/list.html";
});

//비밀번호 hide-show
const icon = document.querySelector('.icon');

let click = 0;

icon.addEventListener('click', () => {

    const eye = document.querySelector('#eye');

    click += 1;

    if (pwd.type === "password") {
        pwd.setAttribute("type", "text");
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
    } else {
        pwd.setAttribute("type", "password");
        eye.classList.add('fa-eye');
        eye.classList.remove('fa-eye-slash');
    }
});