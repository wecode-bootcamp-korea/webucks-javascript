window.addEventListener("DOMContentLoaded", () => {

  // --------------------------------------------------------------heart
  const $heart = document.querySelector(".fa-heart");

  $heart.addEventListener("click", () => {
    $heart.classList.toggle("is-favorite")
    $heart.classList.toggle("fas")
    $heart.classList.toggle("far")
  });

});