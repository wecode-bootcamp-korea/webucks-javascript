function javascriptOnclikc(){
    location.href = "list.html";
}

function loginCheck() {
    let idCheck = document.getElementsByName('id_input')[0].value;
    let pwCheck = document.getElementsByName('pw_input')[0].value;

    let idOk = idCheck.includes("@");
    let pwOk = pwCheck.length >= 8;

    let changeButton = document.getElementsByName('button_login')[0]

    if (idOk == true && pwOk == true) {
        changeButton.style.backgroundColor='#62ADED';
        changeButton.style.cursor="pointer";
        changeButton.addEventListener("click", javascriptOnclikc);
    } else {
        changeButton.style.backgroundColor='#ADD3EB';
        changeButton.style.cursor="default";
        changeButton.removeEventListener("click", javascriptOnclikc);
    }
}
window.onload = function() {
    document.getElementsByName('id_input')[0].addEventListener('keyup',loginCheck);
    document.getElementsByName('pw_input')[0].addEventListener('keyup',loginCheck);
};
