let handleHeart = function (heart){
  
  return function(){
    //far이 빈 하트! 만약 하트가 비어 있다면
    if(heart.classList[0]==='far'){
      heart.classList.replace('far','fas');
      heart.style.color = "#f5425d"
      
      //fas가 채워진 하트! 만약 하트가 채워져있다면
    }else if(heart.classList[0]==='fas'){
      heart.classList.replace('fas','far');
      heart.style.color = "#ccc"
    } 
  }
  
}

const $heartsParents = document.querySelectorAll('.image-title');

[...$heartsParents].forEach((el)=>{
  el.lastElementChild.addEventListener('click',handleHeart(el.lastElementChild));
})


const $toggleBtn = document.getElementById('toggle-bar');
const $toggle = document.querySelector('.toggle');

let handleToggle = function (){
  $toggle.classList.toggle('on');  
}


$toggleBtn.addEventListener('click',handleToggle);
