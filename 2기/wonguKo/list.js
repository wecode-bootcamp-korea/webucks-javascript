const coffeeList = document.querySelector(".typeOfCoffeeWrap");
let isHeart = false;

coffeeList.addEventListener("click", function (event) {
  const heartTarget = event.target.classList.value;
  const heartTargetId = event.target.id;
  const heartId = document.getElementById(heartTargetId);

  console.log();

  if (heartTarget === "far fa-heart") {
    if (isHeart === false) {
      heartId.style.color = "tomato";
      heartId.style.fontWeight = "900";
      isHeart = true;
    } else {
      heartId.style.color = "#c8c9c4";
      heartId.style.fontWeight = "";
      isHeart = false;
    }
  }
});
