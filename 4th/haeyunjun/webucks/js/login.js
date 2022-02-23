const inputId = document.getElementsByClassName('id')[0];
const inputPw = document.getElementsByClassName('password')[0];
const loginButton = document.getElementsByClassName('loginButton')[0];


function activateButton() {
    if(inputId.value.includes('@') && inputPw.value.length > 7){
        loginButton.style.backgroundColor = '#61aded';
        //loginButton.disabled = false; //페이지 이동이 안됨...
    } else {
        loginButton.style.backgroundColor = 'yellow';
        loginButton.disabled = true;
    };
}
inputPw.addEventListener('keyup',activateButton());


//thisIsButton.addEventListener('click',moveToListPage);

/* function moveToListPage(){
    if(username.value.indexOf("@")>0 && password.value.length > 7){
        location.href = "../list.html";
    } else return
} 
*/

