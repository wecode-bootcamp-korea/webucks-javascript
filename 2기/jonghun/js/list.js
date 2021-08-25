window.addEventListener("DOMContentLoaded", function () {
  const coffees1Repository = new CommonData("coffees1");
  const coffees2Repository = new CommonData("coffees2");
  coffees1Repository.loadData();
  coffees2Repository.loadData();
  const coffees1List = coffees1Repository.findMany();
  const coffees2List = coffees2Repository.findMany();
  const painter = new Paint(["coffees1", "coffees2"]);
  painter.coffeePainter(coffees1List, "coffees1");
  painter.coffeePainter(coffees2List, "coffees2");
});
