heart = document.getElementsByClassName('fa-heart');

function changeHeartColor(i){
    heart[i].className = "fa-solid fa-heart";
    heart[i].style.color="red";
}

for(let i=0; i<heart.length; i++){
    heart[i].addEventListener('click',function(){changeHeartColor(i)});
}