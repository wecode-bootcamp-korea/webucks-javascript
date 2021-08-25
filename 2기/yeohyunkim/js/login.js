let id = document.getElementById('id');
let pw = document.getElementById('pw');
let loginBtn = document.getElementById('login');

function activateBtn(x, y) {
  return (x.value.includes('@') && (y.value.length >= 8))? true: false;
}

function colorChange() {
   if (activateBtn(id, pw)) {
        loginBtn.style.backgroundColor = "rgb(96, 173, 237)";
        loginBtn.style.fontSize = "20px";
        loginBtn.style.color = "black";
    }
}

pw.addEventListener('keyup', colorChange);



