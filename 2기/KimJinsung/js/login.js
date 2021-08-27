const butn = document.getElementById('butn');

const loginButton = () => {
  const idValue = document.querySelector('#id').value;
  const pwValue = document.querySelector('#pw').value;

    if(idValue.includes('@') && pwValue.length > 7) {
      butn.removeAttribute('disabled');
      butn.classList.add('buttonActive');
    }else{
      butn.setAttribute('disabled', false);
      butn.classList.remove('buttonActive');
    }
}

id.addEventListener('keyup',loginButton);
pw.addEventListener('keyup',loginButton);
