const loginBox = document.querySelector('.loginBox');
const loginBtn = document.querySelector('.loginBtn');


loginBox.onkeyup = function () {
    let userId = document.querySelector('.id').value;
    let userPw = document.querySelector('.pw').value;
    ((userId.includes('@')) && (userPw.length >= 8))
    ? (loginBtn.classList.add('active'), loginBtn.onclick = moveList) : (loginBtn.classList.remove('active'), loginBtn.onclick=null);
};

function moveList(e) {
    e.preventDefault();
    window.location.href = "list.html";
}