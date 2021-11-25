window.addEventListener("DOMContentLoaded", () => {

  // --------------------------------------------------------------heart
  const $heart = document.querySelector(".fa-heart");

  $heart.addEventListener("click", () => {
    $heart.classList.toggle("is-favorite")
    $heart.classList.toggle("fas")
    $heart.classList.toggle("far")
  });

  // --------------------------------------------------------------review
  const $form = document.querySelector(".review-form");
  const $input = document.querySelector("#review");
  const $reviewsUL = document.querySelector(".reviews-list");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    addReview();
  });

  function addReview() {
    let reviewText = $input.value;
  
    if (reviewText) {
      const $reviewElement = document.createElement('li');
      $reviewElement.classList.add('review-content')
      $reviewElement.innerText = reviewText
      $reviewsUL.appendChild($reviewElement)
    }

    $input.value ='';
  };

});