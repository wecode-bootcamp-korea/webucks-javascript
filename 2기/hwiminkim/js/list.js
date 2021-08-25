'use strict';

const heartIcons = document.querySelectorAll('.heart');
let heart = [];

for (let i = 0; i < heartIcons.length; i++) {
  heart[i] = heartIcons[i];
  heart[i].addEventListener('click', (e) => {
    e.target.classList.toggle('icon-color__red');
  });
}
