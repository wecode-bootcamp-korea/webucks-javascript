//사용할 요소를 가지고 오기 from 'document.body'
const id = document.getElementById('userId');
const password = document.getElementById('password');
const button = document.getElementsByClassName('loginBtn')[0];


let validCheck = () =>  {
    const idValue = id.value;
    const passwordValue = password.value;
   if ((idValue.includes('@')) && (passwordValue.length > 7)) {
       document.body.getElementsByClassName('loginBtn')[0].style['background-color'] ='blue', 
       button.disabled = false;
    } else 
      document.body.getElementsByClassName('loginBtn')[0].style['background-color'] ='#ADD3EA',
      button.disabled = true;
}     

id.addEventListener('keyup', validCheck);
password.addEventListener('keyup', validCheck);

