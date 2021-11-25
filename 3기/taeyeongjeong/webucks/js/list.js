const heart = document.getElementsByClassName('far fa-heart');

for (item of heart) {
  item.addEventListener('click', (e) => {
    if (e.target.className === 'far fa-heart') {
      e.target.className = 'fas fa-heart';
      e.target.style.color = 'red';
    } else {
      e.target.className = 'far fa-heart';
      e.target.style.color = 'black';
    }
  });
}
