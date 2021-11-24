const elID = document.getElementById('ID');
const elPassword = document.getElementById('password');
const btn = document.querySelector("button");
let valID = elID.value;
let valPassword = elPassword.value;

btn.disabled = true;
elPassword.addEventListener('keyup',function(){
    let valIDInner = elID.value;
    let valPasswordInner = elPassword.value;
    if(valIDInner.includes('@')&&valPasswordInner.length>7){
        btn.disabled = false;
        btn.style.backgroundColor='#60ADED';
    }
});
btn.onclick = function(){
    window.location.href = 'list.html';
}
// function makeBlue(){
// document.querySelector("button").style.backgroundColor='#60ADED';

// }