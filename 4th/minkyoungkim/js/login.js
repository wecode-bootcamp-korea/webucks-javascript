let inputContainer = document.getElementById('loginInput-container');
let btn = document.getElementById('loginBtn');
let email = document.getElementById('email');
let pw = document.getElementById('password');

console.log(inputContainer)
function activeBtn(e){

    e.preventDefault();

    if( email.value.includes('@') && pw.value.length >= 7){
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
inputContainer.addEventListener('keyup', (activeBtn));
