const id = location.search.slice(4);
const type = id.slice(0, 2);
let jsonType = "";

switch (type) {
  case "CB":
    jsonType = "coldbrew";
    break;
  case "BD":
    jsonType = "brood";
    break;
}

fetch(`data/${jsonType}.json`).then((response) => {
  response.json().then((res) => {
    const data = res.filter((item) => {
      if (item.id === id) {
        return item;
      }
    })[0];

    console.log(data);
  });
});
