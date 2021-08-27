const heart = document.querySelector('.heart');
const emptyHeart = document.querySelector('.far');

let onoff = false;

function joayo() {
  onoff = !onoff;
  if(onoff) {
    emptyHeart.classList.replace('far', 'fas');
    emptyHeart.classList.add('toRed');
  } else {
    emptyHeart.classList.remove('toRed');
    emptyHeart.classList.replace('fas', 'far');
  }
}

emptyHeart.addEventListener('click', joayo);