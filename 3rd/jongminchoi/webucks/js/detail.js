let heart = document.getElementById("heart");
let heartClick = false;

heart.addEventListener("click", function () {
  if (heartClick === false) {
    heart.innerText = "❤️";
    heartClick = true;
  } else {
    heart.innerText = "🤍";
    heartClick = false;
  }
});
