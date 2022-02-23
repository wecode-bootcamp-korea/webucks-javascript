const iconSelect = document.querySelectorAll("i");

iconSelect.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.className.includes("fa-heart")) {
      if (e.target.className === "fa-regular fa-heart") {
        e.target.className = "fa-solid fa-heart";
      } else {
        e.target.className = "fa-regular fa-heart";
      }
    }
  });
});
