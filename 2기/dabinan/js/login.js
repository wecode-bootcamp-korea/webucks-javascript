const pwd = document.querySelector('#pwd');
const user = cocument.querySelector('#user');
const btn = document.querySelector('.loginBtn');

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

const changeGreen = (input) => {
    input.style.borderColor = "green";
}

const disableButton = () => {
    btn.setAttribute("disabled")
    btn.style.backgroundColor = "#add3ea";
  }

const enableButton = () => {
    btn.removeAttribute("disabled")
    btn.style.backgroundColor = "#72bd2c";
  }

const move = () => {
    location.href = "list.html"
}

//email or password valid -> change green
document.addEventListener('input', () => {
    if(validateEmail(user.value)) {
        changeGreen(user);
    }else if(validatePassword(pwd.value)) {
        changeGreen(pwd);
    }else if(validateEmail(user.value) && validatePassword(pwd.value)) {
        disableButton();
    }
})

btn.addEventListener('click',()=>{
    if(document.btn.disabled = false) {
        move();
    }
})


//password hide-show
const eye = document.querySelector('#icon i');
eye.addEventListener('click', () => {
    if (pwd.type === "password") {
      pwd.type = "text";
      eye.className = "far fa-eye-slash";
    } else {
      pwd.type = "password";
      eye.className = "far fa-eye";
    }
})

