let idInput= document.getElementById('idInput')
let pwInput= document.getElementById('pwInput')
let loginButton =document.getElementsByClassName('login_button')

let checkInput=()=>{
    if(idInput.value.includes('@')&&pwInput.value.length>=8){
        loginButton[0].style.backgroundColor="rgb(114,172,230)"
        loginButton[0].disabled=false;
    }
    else{
        loginButton[0].style.backgroundColor="rgb(180, 210, 232)"
        loginButton[0].disabled=true;
    }
    
    
    }


idInput.addEventListener('input', checkInput);
pwInput.addEventListener('input', checkInput);


