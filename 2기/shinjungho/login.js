const userId = document.getElementById('id'); //id input
const userPw = document.getElementById('password'); //pw input
const logbtn = document.getElementsByClassName('login-btn')[0]; //login btn

console.log(userId);

userId.addEventListener('keyup', function () {
    const inputId = document.getElementById('id').value;
    const inputPw = document.getElementById('password').value;

    if (inputPw.includes('@') && inputPw.length >= 8) {
        console.log(123);

        logbtn.style.opacity = 10;
    }
    logbtn.addEventListener("click","list.html")

});




/*
userId.addEventListener('keyup',loginButtonColor)
// console.log(loginButtonColor)
userPw.addEventListener('keyup',loginButtonColor)
logbtn.addEventListener('keyup',loginButtonColor)
*/

