const likeWraper = document.querySelector('#likeWraper');
let likeSwitch = false;


function likeSwitchHandle(){
    if(!likeSwitch){
        likeWraper.innerHTML = '<i class="fas fa-heart like likeOn"></i>';
        likeSwitch = true;
    } else {
        likeWraper.innerHTML = '<i class="far fa-heart like"></i>';
        likeSwitch = false;
    }
}

likeWraper.addEventListener('click', likeSwitchHandle);