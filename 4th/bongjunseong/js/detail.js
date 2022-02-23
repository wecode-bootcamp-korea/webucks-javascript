const thisIsIcon = document.getElementById('icon');
const heartColor = document.getElementById('color');

thisIsIcon.addEventListener('click', function() {
    if(heartColor.className == "colorGray") {
      thisIsIcon.className = "fa-solid fa-heart fa-xl";
      heartColor.className = "colorRed";
      console.log(heartColor.className);
    } else {
      thisIsIcon.className = "fa-regular fa-heart fa-xl";
      heartColor.className = "colorGray";
    }
})

const reviewList = document.getElementsByClassName('reviewList')[0];
const thisIsReview = document.getElementsByClassName('reviewChat')[0];

thisIsReview.addEventListener('keyup', function post(e){
  if(e.keyCode == 13){
    const reply = document.createElement('p');
    reply.innerHTML = thisIsReview.value;
    reviewList.appendChild(reply);
  }
})