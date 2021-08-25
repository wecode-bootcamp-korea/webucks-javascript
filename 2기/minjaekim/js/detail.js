const heartIcon = document.getElementById('heartIcon');

const fillHeartIcon = () => {
  if(heartIcon.style.color === 'tomato'){
    return heartIcon.style.color = 'gray'
  } else {
    return heartIcon.style.color = 'tomato'
  }
}
heartIcon.addEventListener("click", fillHeartIcon);
///
const commentBoxInput = document.getElementById('commentChatBox');
const reviewStatus =  document.getElementById('reviewStatus');

const sendComment= (event) => {
  const userComment = commentBoxInput.value;
  const list = document.createElement('li')
  list.innerHTML = userComment;  
  if (event.code==='Enter') {
    event.preventDefault();
    return reviewStatus.appendChild(list)
  }
}
commentBoxInput.addEventListener('keypress', sendComment)

