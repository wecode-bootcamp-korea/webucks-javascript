let form = document.getElementById('login-form');
let btn = document.getElementById('loginBtn');
let email = document.getElementById('email');
let pw = document.getElementById('password');


function activeBtn(e){

    e.preventDefault();

    if( email.value.includes('@') && pw.value >= 7){
        btn.style.opacity = 1;
        btn.disabled = false;
        
    }else{
        btn.style.opacity = 0.5
        btn.disabled = true;
    }
}


function checkLogin(opacity, disabled){
    btn.style.opacity = opacity;
    btn.disabled = disabled;

}
form.addEventListener('keyup', (activeBtn));
