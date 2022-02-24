const inputid = document.getElementsByClassName('id');
const inputpw = document.getElementsByClassName('pw');
const loginBtn = document.getElementsByClassName('loginBtn');

function activeLogin(){
    inputid.addEventLiestener('keyup' ,() => {
    if (inputid.value.includes('@') && inputpw > 7){
            loginBtn.style.opacity = 0.5};
    else
    {loginBtn.style.opacity = 1.0};
})


activeLogin();