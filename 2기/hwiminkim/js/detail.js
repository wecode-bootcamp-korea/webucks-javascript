'use strict';

const changeHeartColor = function () {
  const heartEl = document.querySelector('.header-heart');
  //  add / remove class with toggle()
  heartEl.addEventListener('click', () => {
    heartEl.classList.toggle('icon-color__red');
  });
};

changeHeartColor();

// review

const createAndDeleteReview = function () {
  const input = document.querySelector('.review-input');
  const reviewItems = document.querySelector('.items');

  const onAdd = () => {
    const userInput = input.value;

    const reviewItem = document.createElement('li');
    reviewItem.className = 'item';

    const contentBox = document.createElement('div');
    contentBox.className = 'content-box';

    const btnBox = document.createElement('div');
    btnBox.className = 'btn-box';

    const itemText = document.createElement('p');
    itemText.className = 'itemText';
    itemText.innerHTML = `<b>작성자</b>  <span>${userInput}</span>`;

    const itemDel = document.createElement('button');
    itemDel.className = 'itemDel';
    itemDel.innerHTML = '<i class="far fa-trash-alt">';

    itemDel.addEventListener('click', () => {
      reviewItems.removeChild(reviewItem);
    });

    const likeBtn = document.createElement('button');
    likeBtn.className = 'like';
    likeBtn.innerHTML = '<i class="fas fa-heart fa-lg heart"></i>';

    likeBtn.addEventListener('click', e => {
      e.target.classList.toggle('icon-color__red');
    });

    contentBox.appendChild(itemText);
    btnBox.appendChild(itemDel);
    btnBox.appendChild(likeBtn);
    reviewItem.appendChild(contentBox);
    reviewItem.appendChild(btnBox);
    reviewItems.appendChild(reviewItem);
    input.value = '';
  };

  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      onAdd();
    }
    return;
  });
};

createAndDeleteReview();
