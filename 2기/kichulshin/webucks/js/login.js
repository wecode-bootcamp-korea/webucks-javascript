const login = document.getElementById("logbtn");
const id = document.getElementById("namemail");
const pw = document.getElementById("pwput");

const successlogin = () => {
    if(id.value.includes('@') && pw.value.length >= 8) {
        login.style.opacity = 1;
        login.disabled = false;
    } else {
        login.style.opacity = 0.5;
        login.disabled = true ;
    }
}
id.addEventListener("keyup", successlogin);
pw.addEventListener("keyup", successlogin);

const nxtpage = () => {
   login.onclick = window.open('/list.html', '_blank');
}

