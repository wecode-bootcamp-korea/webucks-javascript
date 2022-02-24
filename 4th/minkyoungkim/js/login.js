let form = document.getElementById('login-form');
let btn = document.getElementById('loginBtn');

function activeBtn(e){

    e.preventDefault();
    let email = document.getElementById('email').value;
    let pw = document.getElementById('password').value;


    if( email.includes('@') && pw >= 7){
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
