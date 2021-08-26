const pwd = document.querySelector('#pwd');
const user = document.querySelector('#user');
const btn = document.querySelector('.loginBtn');

let isValid = [false, false];

const validateEmail = (id) => {
    let letters = /^([a-z0-9_]){6,}$/;
    if (letters.test(id)) {
        return true;
    } else {
        return false;
    }
}

const validatePassword = (password) => {
    let letters = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    if (letters.test(password)) {
        return true;
    } else {
        return false;
    }
}

const enableButton = (arr) => {
    if (arr[0] && arr[1]) {
    btn.removeAttribute("disabled")
    btn.style.backgroundColor = "#2F8BE9";
  } else {
    btn.setAttribute("disabled", true);
    btn.style.backgroundColor = "#add3ea";
  }
}
//green
const green = (x, y) => {
    if (x) {
        y.style.borderColor = "#2E865A";
    } else {
        y.style.borderColor = "##dddddd"
    }
}

//email or password valid -> change green
document.addEventListener('input', () => {
    isValid[0] = validateEmail(user.value) ? true : false;
    isValid[1] = validatePassword(pwd.value) ? true : false;
    enableButton(isValid);
    green(isValid[0], user);
    green(isValid[1], pwd);
})

//move to list page
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = "/list.html"
})

//password hide-show
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
})