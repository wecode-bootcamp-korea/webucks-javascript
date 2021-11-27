const idCheck = document.getElementsByClassName('login_input')[0];
const pwCheck = document.getElementsByClassName('login_input')[1];
const alertId = document.getElementsByClassName('alert')[0];
const alertPw = document.getElementsByClassName('alert')[1];
const atvBtn = document.querySelector('.login_btn');


// Login function()
idCheck.addEventListener('input', function() {
    // console.log(`### id length : ${idCheck.value.length}`);
    if ((idCheck.value.includes('@') && idCheck.value.length > 9) && pwCheck.value.length >= 8){
        activateBtn();
    } else {
        deactivateBtn();
    }
});    
pwCheck.addEventListener('input', function() {
    // console.log(`### id length : ${pwCheck.value.length}`);
    if (pwCheck.value.length >= 8 && (idCheck.value.includes('@') && idCheck.value.length > 9)) {
        activateBtn();    
    } else {
        deactivateBtn();
        }
});

function activateBtn(){
    atvBtn.style.backgroundColor = '#519be9';
    atvBtn.style.cursor = 'pointer';
    atvBtn.setAttribute('onClick', 'moveList()');
}

function deactivateBtn() {
    atvBtn.style.backgroundColor = '#aed4ea';
    atvBtn.style.cursor = 'default';
    atvBtn.removeAttribute('onClick');
}
