// User Authentication Level 1

const loginValidation = (function() {

  const btnLogin = document.querySelector('.btn__login');
  const form = document.querySelector('.auth');

  const isValid = {id:false, pw:false};
  
  const validUI = function(validObj) {
    if (validObj.id && validObj.pw) {
      btnLogin.removeAttribute('disabled');
    } else {
      btnLogin.setAttribute('disabled', true);
    }
  };

  const validation = e => {
    if (e.target.type === 'text') {
      isValid.id = e.target.value.indexOf('@') !== -1 ? true : false;
    }
    if (e.target.type === 'password') {
      isValid.pw = e.target.value.length >= 8 ? true : false;
    }
    validUI(isValid);
  };

  const relocation = () => {
    window.location.href = '/list.html';
  };
  
  form.addEventListener('input', validation);

  form.addEventListener('keypress', e => {
    e.key === 'Enter' && isValid.id && isValid.pw && relocation();
  })

  btnLogin.addEventListener('click', e => {
    !e.target.disabled && relocation();
  });

})();


// Work In Progress
// Authentication Level 2

const authentication = (function() {

})();