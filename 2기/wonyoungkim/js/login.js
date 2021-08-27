const user = document.querySelector('.userName');
const pwd = document.querySelector('.passWord');
const btn = document.querySelector('#loginBtn');



const Password = (pwd) => {
    let letters = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    if (letters.test(pwd)) {
        return true;
    } else {
        return false;
    }
}

const Email = (user) => {
  let letters = /^([a-z0-9_]){8,}$/;
  if (letters.test(user)) {
      return true;
  } else {
      return false;
  }
}

const disButton = () => {
    btn.setAttribute("disabled")
    btn.style.backgroundColor = "#add3ea";
  }

const Button = () => {
    btn.removeAttribute("disabled")
    btn.style.backgroundColor = "#72bd2c";
  }


document.addEventListener('input', () => {
    if(Email(user.value) && Password(pwd.value)) {
        disButton();
    }
})



