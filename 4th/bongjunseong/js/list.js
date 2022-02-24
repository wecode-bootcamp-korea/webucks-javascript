const theseAreIcons = document.querySelectorAll('i');

theseAreIcons.forEach((el) => {
  el.addEventListener('click', function(e) {
    if (e.target.className.includes("fa-heart")) {
      if (e.target.className == "fa-regular fa-heart gray") {
        e.target.className = "fa-solid fa-heart red";
      } else {
        e.target.className = "fa-regular fa-heart gray";
      }
    }
  })
});