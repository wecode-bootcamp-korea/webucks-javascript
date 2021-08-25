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

const review = function () {
  const input = document.querySelector('.review-input');
  const items = document.querySelector('.items');

  const onAdd = () => {
    const text = input.value;

    const item = document.createElement('li');
    item.className = 'item';

    const contentBox = document.createElement('div');
    contentBox.className = 'content-box';

    const btnBox = document.createElement('div');
    btnBox.className = 'btn-box';

    const itemText = document.createElement('p');
    itemText.className = 'itemText';
    itemText.innerHTML = `<b>작성자</b>  <span>${text}</span>`;

    const itemDel = document.createElement('button');
    itemDel.className = 'itemDel';
    itemDel.innerHTML = '<i class="fas fa-trash-alt">';

    itemDel.addEventListener('click', () => {
      items.removeChild(item);
    });

    const likeBtn = document.createElement('button');
    likeBtn.className = 'like';
    likeBtn.innerHTML = '<i class="far fa-heart fa-lg heart"></i>';

    likeBtn.addEventListener('click', (e) => {
      e.target.classList.toggle('icon-color__red');
    });

    contentBox.appendChild(itemText);
    btnBox.appendChild(itemDel);
    btnBox.appendChild(likeBtn);
    item.appendChild(contentBox);
    item.appendChild(btnBox);
    items.appendChild(item);
    input.value = '';
  };

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      onAdd();
    }
    return;
  });
};

review();
