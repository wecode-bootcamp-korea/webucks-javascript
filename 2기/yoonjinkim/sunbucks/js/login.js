const userAccount = document.querySelector('.login-useraccount');
const password = document.querySelector('.login-password');
const button = document.querySelector('.login-button');

console.log(userAccount.type, '유저어카운트!!!');
console.log(userAccount.value, '유저어카운트!!!');
console.log(userAccount.value.includes('@'));



const clickHandler = () => {
  if((userAccount.value.includes('@')) && (password.value.length>7)){
    console.log('isvalid....clickhandlerisfine');
    button.classList.remove('button-wrap');
    button.classList.add('button-wrap-qualified');
  }
}


userAccount.addEventListener('click', clickHandler);
