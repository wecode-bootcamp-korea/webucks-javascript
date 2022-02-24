window.onload = function() {

    let loginEventTarget = document.getElementsByClassName("login_form")[0];
    let loginButton = document.querySelector(".login_button button");
    let loginOn = 0;

    loginEventTarget.addEventListener("click", () => loginCheck());
    loginEventTarget.addEventListener("keyup", () => loginCheck());
    loginButton.addEventListener("click", () => login());

    function loginCheck() {

        let targetId = document.getElementById("id").value;
        let targetPassword = document.getElementById("password").value;
        
        if(targetId.includes("@") && targetPassword.length > 7) {
            loginButton.setAttribute("class","login_button_on");
            loginOn = 1;
        }

        if(!(targetId.includes("@")) || targetPassword.length < 8) {   
            loginButton.removeAttribute("class");
            loginOn = 0;
        }
        
    }

    function login() {
        let listLocation = window.location.href.replace("login.html","list.html");
        loginOn === 1 ? window.location.href=listLocation : false;
    }

}

