const loginId = document.querySelector("#email");
const loginPassword = document.querySelector("#password");
const loginBtn = document.querySelector(".loginBtn");
const hideBtn = document.querySelector("hide");
const viewBtn = document.querySelector("view");

let idValue;
let passwordValue;

const checkValue = (e) =>{
    if(e.target.id == "email"){
        idValue = e.target.value
        lightId(idValue)
       
    }else if(e.target.id == "password"){
        passwordValue = e.target.value;
        lightPassword(passwordValue)
    }
    if(idValue.includes("@") && passwordValue.length > 7){
        loginBtn.style.opacity = 1;
    }else{
        loginBtn.style.opacity = 0.3;
    }
}

const lightId = (value) =>{
    if(value.includes("@")){
        loginId.style.border = "2px solid green"
    }else {
        loginId.style.border = ""
    }
}
const lightPassword = (value) =>{
    if(value.length > 7){
        loginPassword.style.border = "2px solid green"
    }else {
        loginId.style.border = ""
    }
}

const hide = () =>{
    loginPassword.type = "password";
}

const view = () =>{
    loginPassword.type = "text";
}


loginId.addEventListener("input", checkValue);
loginPassword.addEventListener("input",checkValue)
