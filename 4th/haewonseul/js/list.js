wrapBox = document.getElementsByClassName('wrap');

function changeHeartColor(event){
    if(event.target.className === "fa-regular fa-heart"){
        event.target.className = "fa-solid fa-heart";
        event.target.style.color="red";
    }
}

wrapBox[0].addEventListener('click', changeHeartColor);
wrapBox[1].addEventListener('click', changeHeartColor);