const emptyHeart = document.querySelector('.far');
const comment = document.querySelector('.comment');
const newComment = document.querySelector('.newComment');
const comments = document.querySelector('.comments');

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

function addComment (event) {
  if(event.keyCode==13) {
    const newDiv = document.createElement('div');
    const newSpan = document.createElement('span');
    newDiv.classList.add('commentRow');
    newSpan.classList.add('comment');
    newSpan.innerText = newComment.value;
    newDiv.appendChild(newSpan);
    comments.appendChild(newDiv);
    newComment.value = "";
  }
}

emptyHeart.addEventListener('click', joayo);
newComment.addEventListener('keydown', addComment);