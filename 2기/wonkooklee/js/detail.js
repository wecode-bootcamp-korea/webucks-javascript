const detailInteraction = (function() {
  
  const commentDOM = document.querySelector('.comment');
  const validTag = document.getElementById('validTag');
  const reviewInputField = document.getElementById('review_field');
  
  const invalidAlert = () => {
    validTag.style.animationName = 'notValid';
    setTimeout(() => { validTag.style.animationName = '' }, 1500);
  }
  
  const addComment = (e, userName='oneook', userComment) => {
    e.preventDefault();
    if (userComment.length < 10) {
      invalidAlert();
      return;
    };
  
    let html = `<li class="review_thread"><span class="id">${userName}</span><span class="comment">${userComment}</span></li>`;
    document.getElementById('RvTarget').insertAdjacentHTML('afterbegin', html);
  
    reviewInputField.value = '';
  }
  
  reviewInputField.addEventListener('keypress', e => {
    e.key === 'Enter' && addComment(e, undefined, e.target.value);
  })

})();



const signIn = (function() {
  
  const signIn = document.querySelector('.sign_in');
  
  function relocation() {
    window.location.href = './login.html';
  }
  
  signIn.addEventListener('click', e => {
    !e.target.disabled && relocation();
  })

})();




// WORK IN PROGRESS

const zoomImage = (function() {

  const zoomFrame = document.querySelector('.zoomFrame');
  const zoomLens = document.querySelector('.zoomLens');
  const zoomWindow = document.querySelector('.zoomWindow');

  function handleMouseMove(e) {

    const {left, top} = zoomFrame.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    zoomLens.style.display = 'block';
    zoomWindow.style.display = 'block';

    zoomLens.style.left = x - 153 + 'px';
    zoomLens.style.top = y - 117 + 'px';

    zoomWindow.style.backgroundPosition = `-${x}px -${y}px`
  }

  zoomFrame.addEventListener('mousemove', handleMouseMove);

  zoomFrame.addEventListener('mouseleave', e => {
    zoomLens.style.display = 'none';
    zoomWindow.style.display = 'none';
  });


})();