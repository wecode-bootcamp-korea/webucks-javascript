const user = document.querySelector('.userName');
const pwd = document.querySelector('.passWord');
const btn = document.querySelector('#loginBtn');



const inValidInput = () => {
  return (user.value.includes("@") && pwd.value.length >= 8)
}

const changeColor =  () => {
  const isValid = inValidInput()
  if (isValid) {
    btn.style.backgroundColor = "#398dd6";
  }else {
    btn.style.backgroundColor = "#C4E1FB";
  }
};

user.addEventListener('input', changeColor)
pwd.addEventListener('input',changeColor)
