const contentsForm = document.getElementsByClassName("contents");

fetch("data/coldbrew.json").then((response) => {
  response.json().then((res) => {
    let container = document.getElementsByClassName("container coldbrew")[0];
    res.forEach((item) => {
      let node = document.createElement("div");
      node.className = "contents";
      node.id = item.id;
      node.innerHTML = `<picture class="imageWrap" onclick="goDetail(${node.id})">
              <img
                alt="coffee"
                class="coffeeImage"
                src="${item.image}"
              />
            </picture>
            <span class="name">${item.name}</span>`;
      container.appendChild(node);
    });
  });
});

fetch("data/brood.json").then((response) => {
  response.json().then((res) => {
    let container = document.getElementsByClassName("container brood")[0];
    res.forEach((item) => {
      let node = document.createElement("div");
      node.className = "contents";
      node.id = item.id;
      node.innerHTML = `<picture class="imageWrap" onclick="goDetail(${node.id})">
              <img
                alt="coffee-cup"
                class="coffeeImage"
                src="${item.image}"
              />
            </picture>
            <span class="name">${item.name}</span>`;
      container.appendChild(node);
    });
  });
});

function goDetail(node) {
  window.location = `http://localhost:5500/detail.html?id=${node.id}`;
}
