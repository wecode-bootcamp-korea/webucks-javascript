
const id = document.getElementById('id');
const pwd = document.getElementById('pwd');
const loginButton = document.getElementById('loginBtn');
const hideButton = document.getElementsByClassName('fa-solid fa-eye-slash')[0];
const showButton = document.getElementsByClassName('fa-solid fa-eye')[0];

function ActiveBtn(key){
    const idReg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const pwdReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    (inputBorderActive(idReg, id) == true && inputBorderActive(pwdReg,pwd) == true) ? setBtnActive("#61ADED",false) : setBtnActive("#add3eb",true);
}
function setBtnActive(color, using){
    loginButton.style.backgroundColor = color;
    loginButton.disabled = using;
}
function inputBorderActive(reg, inputId){
    if(inputId.value.match(reg)){
        inputId.style.borderColor = "green";
        return true;
    }
    else{
        inputId.style.borderColor = "red";
        return false;
    }
}

function pwdVisible(showV,hideV,pwdType){
    showButton.style.visibility = showV;
    hideButton.style.visibility = hideV;
    pwd.type = pwdType;
}

id.addEventListener('keyup',ActiveBtn);
pwd.addEventListener('keyup',ActiveBtn);
showButton.addEventListener('click',function(){pwdVisible("hidden","visible","password")});
hideButton.addEventListener('click',function(){pwdVisible("visible","hidden","text")});

