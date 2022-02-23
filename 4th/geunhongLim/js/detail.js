const heartBtn = document.getElementsByTagName("button")[0];

console.log(heartBtn);

//클릭하면 버튼 바뀌는
function btnColorChangeHandler() {
  heartBtn.style.color = "red";
  heartBtn.style.opacity = 1;
}
heartBtn.addEventListener("click", btnColorChangeHandler);
