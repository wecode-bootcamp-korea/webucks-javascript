const heart = document.getElementById('detail-page__content-heart');
const inputReview = document.getElementById('input-review');
const reviewComment = document.getElementsByClassName(
  'nutrition-info__review-comment'
)[0];
const deleteComment = document.getElementsByClassName('fa-times');

heart.addEventListener('click', () => {
  if (heart.className === 'far fa-heart') {
    heart.className = 'fas fa-heart';
    heart.style.color = 'red';
  } else {
    heart.className = 'far fa-heart';
    heart.style.color = '#cecece';
  }
});

inputReview.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    const div = document.createElement('div');
    div.className = 'nutrition-info__review-comment__inner';

    const p = document.createElement('p');
    const newCommentPText = document.createTextNode(inputReview.value);

    const span = document.createElement('span');
    const newCommentSpanText = document.createTextNode('dev.TaeYeong');
    span.appendChild(newCommentSpanText);

    const iHeart = document.createElement('i');
    iHeart.className = 'far fa-heart';
    iHeart.onclick = clickHeart;

    const iDelete = document.createElement('i');
    iDelete.className = 'fas fa-times';
    iDelete.onclick = clickDelete;

    p.appendChild(span);
    p.appendChild(newCommentPText);

    div.appendChild(p);

    p.after(iDelete);
    p.after(iHeart);

    reviewComment.appendChild(div);
    inputReview.value = '';
  }
});

function clickDelete() {
  const parent = window.event.target.parentElement;
  parent.remove();
}

function clickHeart() {
  const heart = window.event.target;
  if (heart.className === 'fas fa-heart') {
    heart.className = 'far fa-heart';
    heart.style.color = 'black';
  } else {
    heart.className = 'fas fa-heart';
    heart.style.color = 'red';
  }
}

// for (item of deleteComment) {
//   item.addEventListener('click', (e) => {
//     const parent = e.target.parentElement;
//     parent.remove();
//     console.log(e.target);
//   });
// }
