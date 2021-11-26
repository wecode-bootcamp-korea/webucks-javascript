let inputPart = document.getElementsByTagName("input");
let buttonArray = document.getElementsByTagName("button");

inputPart.addEventListner("keyup", ()=>{
    let loginId = document.getElementById('.id').value;
    let loginPw = document.getElementById('.pw').value;
    if(loginId.includes('@') && loginId.length > 8){
        buttonArray.classList.remove("unactivated");
        buttonArray.classList.add("activated");
    }

})