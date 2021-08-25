const mainCoffee = document.querySelector(".main__coffees");
const mainCoffee2 = document.querySelector(".main__coffees2");

//로딩시 1번만 덮어씁니다.
let newData1;
let newData2;

window.addEventListener("DOMContentLoaded", function () {
  const coffees1Repository = new CommonData("coffees1");
  const coffees2Repository = new CommonData("coffees2");
  // const coffees1List = coffees1Repository.findMany();
  // const coffees2List = coffees2Repository.findMany();
  // const painter = new Paint(["coffees1", "coffees2"]);
  // painter.coffeePainter(coffees1List, "coffees1");
  // painter.coffeePainter(coffees2List, "coffees2");

  newData2 = JSON.parse(localStorage.getItem("coffees2"));
  if (!newData1) {
    newData1 = data1.map((item) => {
      item.isGetHeart = false;
      return item;
    });
    localStorage.setItem("coffees1", JSON.stringify(newData1));
  }

  if (!newData2) {
    newData2 = data2.map((item) => {
      item.isGetHeart = false;
      return item;
    });
    localStorage.setItem("coffees2", JSON.stringify(newData2));
  }
});

function goDetail(index, img, title, isGetHeart) {
  window.location.href = "./detail.html";
  localStorage.setItem(
    "detail",
    JSON.stringify({ index, img, title, isGetHeart })
  );
}
