//하트 누르면 색 변하게 하기
const heart = document.getElementsByClassName("fa-regular fa-heart");

for (let i = 0; i < heart.length; i++) {
  const heart_item = heart[i];

  heart_item.addEventListener("click", () => {
    heart_item.className === "fa-regular fa-heart"
      ? (heart_item.className = "fa-solid fa-heart")
      : (heart_item.className = "fa-regular fa-heart");
  });
}

//전체 컨테이너 값을 가져와서 클릭 요소 확인하고 하트 색 변환
// const product = document.getElementsByClassName("container")[0];
// product.addEventListener("click", (e) => {
//   if (
//     e.target.className === "fa-regular fa-heart" ||
//     e.target.className === "fa-solid fa-heart"
//   ) {
//     e.target.className === "fa-regular fa-heart"
//       ? (e.target.className = "fa-solid fa-heart")
//       : (e.target.className = "fa-regular fa-heart");
//   }
// });
