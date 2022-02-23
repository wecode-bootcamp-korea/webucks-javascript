const loginBtn = document.getElementsByClassName('login-btn')[0];

const idInput = document.getElementsByClassName('id')[0];
const pwInput = document.getElementsByClassName('pw')[0];



idInput.addEventListener('keydown', () => {
  const id = document.getElementsByClassName('id')[0].value;
  const pw = document.getElementsByClassName('pw')[0].value;

  if (id.includes('@') && pw.length > 7) {
      console.log('You can login');
  }

  console.log('function occured!');
  console.log(id);
});

pwInput.addEventListener('keydown', () => {
    const id = document.getElementsByClassName('id')[0].value;
    const pw = document.getElementsByClassName('pw')[0].value;
  
    if (id.includes('@') && pw.length > 7) {
        loginBtn.style.backgroundColor = '#61aded';
    }
  
    console.log('function occured!');
    console.log(pw);
  });

