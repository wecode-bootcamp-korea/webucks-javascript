const detailInteraction = (function() {
  
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
  
    let html = `<li class="review_thread"><span class="id">${userName}</span><span class="comment">${userComment}</span><div id="closeBtn">X</div></li>`;
    document.getElementById('RvTarget').insertAdjacentHTML('afterbegin', html);
  
    reviewInputField.value = '';
  }
  
  reviewInputField.addEventListener('keypress', e => {
    e.key === 'Enter' && addComment(e, undefined, e.target.value);
  })

})();

const deleteComment = (function() {
  const reviewField = document.getElementById('RvTarget');

  reviewField.addEventListener('click', e => {
    if (e.target.id !== 'closeBtn') return;
    e.target.closest('.review_thread').remove();
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




// ZOOM INTERACTION

const zoomImage = (function() {

  const zoomFrame = document.querySelector('.zoomFrame');
  const zoomLens = document.querySelector('.zoomLens');
  const zoomWindow = document.querySelector('.zoomWindow');

  function handleMouseMove(e) {

    const {left, top} = zoomFrame.getBoundingClientRect();
    const {x:lensLeft, y:lensTop} = zoomLens.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

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

    if (x <= bor.xMin && y <= 117) {
      zoomLens.style.left = '0';
      zoomLens.style.top = '0';
    } else if (x > bor.xMin && x < bor.xMax && y <= bor.yMin) {
      zoomLens.style.left = coord.x;
      zoomLens.style.top = '0';
    } else if (x >= bor.xMax && y <= bor.yMin) {
      zoomLens.style.left = '145px';
      zoomLens.style.top = '0';
    } else if (x <= bor.xMin && y > bor.yMin && y < bor.yMax) {
      zoomLens.style.left = '0';
      zoomLens.style.top = coord.y;
    } else if (x <= bor.xMin && y >= bor.yMax) {
      zoomLens.style.left = '0';
      zoomLens.style.top = '236px';
    } else if (x > bor.xMin && x < bor.xMax && y >= bor.yMax) {
      zoomLens.style.left = coord.x;
      zoomLens.style.top = '236px';
    } else if (x >= bor.xMax && y >= bor.yMax) {
      zoomLens.style.left = '145px';
      zoomLens.style.top = '236px';
    } else if (x >= bor.xMax && y > bor.yMin && y < bor.yMax) {
      zoomLens.style.left = '145px';
      zoomLens.style.top = coord.y;
    } else {
      zoomLens.style.left = coord.x;
      zoomLens.style.top = coord.y;
    }

    zoomWindow.style.backgroundPosition = `${(lensLeft - 82.5) * 100 / 145}% ${(lensTop - 248) * 100 / 236}%`
  }

  zoomFrame.addEventListener('mousemove', handleMouseMove);

  zoomFrame.addEventListener('mouseleave', e => {
    zoomLens.style.display = 'none';
    zoomWindow.style.display = 'none';
  });


})();