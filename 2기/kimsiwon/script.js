
const id = document.querySelector('input.id');
const pwd = document.querySelector('.pwd');
const btn = document.querySelector('.btn');

let nInclude = false;
let moreThan8 = false;

function loginActiveCheck() {
    if(nInclude && moreThan8)
        btn.classList.add('btn-active');
    else btn.classList.remove('btn-active');
}

function idKeyupHandler(){
    loginActiveCheck();
    if(id.value.indexOf('@') !== -1)
    nInclude = true;
    else nInclude = false;
    loginActiveCheck(); 
}

function pwdKeyupHandler(e){
    loginActiveCheck();    
    if(pwd.value.length>=8)
    moreThan8 = true;
    else moreThan8 = false;
    loginActiveCheck();
    console.dir(e);
    return e.key === "Enter" ? goToList() : null;
}

function goToList(){
    if(nInclude && moreThan8)
        window.location.href = 'list.html'
}


id.addEventListener("keyup", idKeyupHandler);
pwd.addEventListener("keyup", pwdKeyupHandler);
// pwd.addEventListener("keyup", goToList);