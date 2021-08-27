const nameBox = document.getElementsByClassName("boxTotalCSS")[0];
const pwBox = document.getElementsByClassName("boxTotalCSS")[1];
const buttonBox = document.getElementsByClassName("boxTotalCSS")[2];

function isValialvle() {
  return nameBox.value.includes('@') &&  pwBox.value.length > 8;
}


const inputBoxStyleColor = () => {
  console.log(isValialvle())
  if(isValialvle()){
    buttonBox.style.opacity = 1;
    //totalBox[2].click = () => {window.open('list.html')}
    buttonBox.addEventListener('click', () => {
      window.open('list.html');
    })
  }else {
    buttonBox.style.opacity = 0.5;
  }
}

nameBox.addEventListener('keydown', inputBoxStyleColor);
pwBox.addEventListener('keydown', inputBoxStyleColor);



