const heartBtn = document.querySelectorAll(".heartIcon");



const heart = (button) =>{
    const icon = button.querySelector("i");
   
    button.innerHTML = "<i class='fa fa-solid fa-heart' style = color:red></i>"
    if(icon.style.color=="red"){
    button.innerHTML ="<i class='far fa-thin fa-heart' ></i>"
    }
}


for(const button of heartBtn){
    button.addEventListener("click",()=>heart(button))
}

