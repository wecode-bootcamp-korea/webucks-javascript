let isCorrectEmail = document.getElementById("input-id");
let isCorrectPW = document.getElementById("input-pw");
let loginButton = document.getElementById("button");

function actButton() {
    if(isCorrectEmail.value.includes("@") && isCorrectPW.value.length > 7) {
        loginButton.style.opacity = 1;
        loginButton.disabled = false;

    } else {
        loginButton.style.opacity = 0.5;
        loginButton.disabled = true;
    }
}

isCorrectEmail.addEventListener('keyup', actButton);
isCorrectPW.addEventListener('keyup', actButton) 