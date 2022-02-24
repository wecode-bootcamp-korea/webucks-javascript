const theseAreIcons = document.querySelectorAll('i');

theseAreIcons.forEach((el) => {
  el.addEventListener('click', function(e) {
    if (e.target.className == "fa-regular fa-heart gray") {
      e.target.className = "fa-solid fa-heart red";
    } else if (e.target.className == "fa-solid fa-heart red"){
      e.target.className = "fa-regular fa-heart gray";
    } else if (e.target.className == "fa-regular fa-trash-can gray") {
      e.target.parentElement.remove();
    }
  })
});



const reviewList = document.getElementsByClassName('reviewList')[0];
const thisIsReview = document.getElementsByClassName('reviewChat')[0];

thisIsReview.addEventListener('keyup', function post(e){
  if(e.keyCode === 13){
    console.log(thisIsReview);
    console.log(thisIsReview.value);
    console.log(e);

    if(thisIsReview.value.length >= 1) {
      const reviewBox = document.createElement('div');
      const reply = document.createElement('p');
      const heart = document.createElement('i');
      const trashcan = document.createElement('i');

      reply.innerHTML = thisIsReview.value;
      heart.className = 'fa-regular fa-heart gray';
      trashcan.className = 'fa-regular fa-trash-can gray';
      reviewBox.className = 'reviewLine';

      reviewBox.appendChild(reply);
      reviewBox.appendChild(heart);
      reviewBox.appendChild(trashcan);
      
      reviewList.appendChild(reviewBox);

      heart.addEventListener('click', function() {
        if (heart.className == "fa-regular fa-heart gray") {
          heart.className = "fa-solid fa-heart red";
        } else if (heart.className == "fa-solid fa-heart red"){
          heart.className = "fa-regular fa-heart gray";
        }
      })

      trashcan.addEventListener('click', function() {
        trashcan.parentElement.remove();
      })

      thisIsReview.value = "";
    }
  }
})



/* const reviewList = document.getElementsByClassName('reviewList')[0];
const thisIsReview = document.getElementsByClassName('reviewChat')[0];

thisIsReview.addEventListener('keyup', function post(e){
  if(e.keyCode == 13){
    const reply = document.createElement('p');
    reply.innerHTML = thisIsReview.value;
    reviewList.appendChild(reply);
    thisIsReview.value = "";
  }
}) */ 