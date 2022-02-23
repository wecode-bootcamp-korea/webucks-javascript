let form = document.getElementById('login-form');
let btn = document.getElementById('loginBtn');

function activeBtn(e){

    e.preventDefault();
    let email = document.getElementById('email').value;
    let pw = document.getElementById('password').value;


    if(email.includes('@') && pw.length >= 8){
       btn.style.opacity = 1;
       btn.removeAttribute('disabled')
    }else{
        btn.style.opacity = 0.5;
    }

    btn.addEventListener('click', goList);

}


function goList(){
    window.location.href = './list.html'

}
form.addEventListener('keyup', activeBtn);
