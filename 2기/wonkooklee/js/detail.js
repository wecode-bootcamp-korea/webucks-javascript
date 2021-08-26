'use strict';

// Comment Manipulation

const manipulateComment = (function() {
  
  const validTag = document.getElementById('validTag');
  const reviewInputField = document.getElementById('review_field');
  
  const invalidAlert = () => {
    validTag.style.animationName = 'notValid';
    setTimeout(() => { validTag.style.animationName = '' }, 1500);
  }
  
  const addComment = (event, userName='oneook', userComment) => {
    event.preventDefault();
    if (userComment.length < 10) {
      invalidAlert();
      return;
    };
  
    let html = `<li class="review_thread"><span class="id">${userName}</span><span class="comment">${userComment}</span><div id="closeBtn">X</div></li>`;
    document.getElementById('RvTarget').insertAdjacentHTML('afterbegin', html);
  
    reviewInputField.value = '';
  }
  
  reviewInputField.addEventListener('keypress', (event) => {
    event.key === 'Enter' && addComment(event, undefined, event.target.value);
  })

})();


// Delete Comment

const deleteComment = (function() {
  const reviewField = document.getElementById('RvTarget');

  reviewField.addEventListener('click', event => {
    if (event.target.id !== 'closeBtn') return;
    event.target.closest('.review_thread').remove();
  })

})();


// Relocate Page

const signIn = (function() {
  
  const signIn = document.querySelector('.sign_in');
  
  function relocation() {
    window.location.href = './login.html';
  }
  
  signIn.addEventListener('click', e => {
    !e.target.disabled && relocation();
  })

})();


// ZOOM INTERACTION

const zoomImage = (function() {

  const zoomFrame = document.querySelector('.zoomFrame');
  const zoomLens = document.querySelector('.zoomLens');
  const zoomWindow = document.querySelector('.zoomWindow');

  function handleMouseMove(event) {

    const {left, top} = zoomFrame.getBoundingClientRect();
    const {x:lensLeft, y:lensTop} = zoomLens.getBoundingClientRect();

    const x = event.clientX - left;
    const y = event.clientY - top;

    zoomLens.style.display = 'block';
    zoomWindow.style.display = 'block';

    const bor = {
      xMin: 153,
      xMax: 297,
      yMin: 117,
      yMax: 353
    }

    const coord = {
      x: x - 153 + 'px',
      y: y - 117 + 'px'
    }

    switch (true) {

      case (x <= bor.xMin && y <= 117) :
        zoomLens.style.left = '0';
        zoomLens.style.top = '0';
        break;

      case (x > bor.xMin && x < bor.xMax && y <= bor.yMin) :
        zoomLens.style.left = coord.x;
        zoomLens.style.top = '0';
        break;

      case (x >= bor.xMax && y <= bor.yMin) :
        zoomLens.style.left = '145px';
        zoomLens.style.top = '0';
        break;

      case (x <= bor.xMin && y > bor.yMin && y < bor.yMax) :
        zoomLens.style.left = '0';
        zoomLens.style.top = coord.y;
        break;

      case (x <= bor.xMin && y >= bor.yMax) :
        zoomLens.style.left = '0';
        zoomLens.style.top = '236px';
        break;

      case (x > bor.xMin && x < bor.xMax && y >= bor.yMax) :
        zoomLens.style.left = coord.x;
        zoomLens.style.top = '236px';
        break;

      case (x >= bor.xMax && y >= bor.yMax) :
        zoomLens.style.left = '145px';
        zoomLens.style.top = '236px';
        break;

      case (x >= bor.xMax && y > bor.yMin && y < bor.yMax) :
        zoomLens.style.left = '145px';
        zoomLens.style.top = coord.y;
        break;

      default :
        zoomLens.style.left = coord.x;
        zoomLens.style.top = coord.y;
    }

    zoomWindow.style.backgroundPosition = `${(lensLeft - left) * 100 / 145}% ${(lensTop - top) * 100 / 236}%`
  }

  zoomFrame.addEventListener('mousemove', handleMouseMove);

  zoomFrame.addEventListener('mouseleave', () => {
    zoomLens.style.display = 'none';
    zoomWindow.style.display = 'none';
  });

})();