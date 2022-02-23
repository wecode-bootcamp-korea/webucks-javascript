const logoutBtn = document.getElementById("logoutBtn");
const contentsForm = document.getElementsByClassName("contents");

logoutBtn.addEventListener("click", (e) => {
  window.location = "http://localhost:5500/login.html?";
});

fetch("data/coldbrew.json").then((response) => {
  response.json().then((res) => {
    let container = document.getElementsByClassName("container coldbrew")[0];
    res.forEach((item) => {
      let node = document.createElement("div");
      node.className = "contents";
      node.id = item.id;
      node.innerHTML = `<picture class="imageWrap" onclick="goDetail(${node.id})">
              <img
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
