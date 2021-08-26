'use strict';

const listModule = (function() {
  
  const signIn = document.querySelector('.sign_in');
  
  function relocation() {
    window.location.href = './login.html';
  }
  
  signIn.addEventListener('click', e => {
    !e.target.disabled && relocation();
  })

})();