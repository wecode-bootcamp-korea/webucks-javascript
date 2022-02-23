const contents = document.getElementsByClassName("contents");

function clickLike(node) {
  // contents id
  let likeData = JSON.parse(localStorage.getItem("like"));
  const id = node.parentNode.parentNode.id;

  if (node.id === "isUnLike") {
    node.className = "fa-solid fa-heart heartIcon isLike";
    node.id = "isLike";
    likeData.push(id);
    localStorage.setItem("like", JSON.stringify(likeData));
  } else {
    node.className = "fa-regular fa-heart heartIcon isUnLike";
    node.id = "isUnLike";
    const result = likeData.filter((like) => {
      if (like !== id) {
        return like;
      }
    });
    localStorage.setItem("like", JSON.stringify(result));
  }
}

fetch("data/coldbrew.json").then((response) => {
  let likeData = JSON.parse(localStorage.getItem("like"));

  response.json().then((res) => {
    let container = document.getElementsByClassName("container coldbrew")[0];

    res.forEach((item) => {
      let node = document.createElement("div");
      node.className = "contents";
      node.id = item.id;

      // heart icon
      const likeNode = likeData.includes(item.id)
        ? `<i class="fa-solid fa-heart heartIcon isLike"
           id="isLike" onclick="clickLike(this)"></i>`
        : `<i class="fa-regular fa-heart heartIcon isUnLike"
           id="isUnLike" onclick="clickLike(this)"></i>`;

      node.innerHTML = `
          <picture class="imageWrap" onclick="goDetail(${node.id})">
              <img
                alt="coffee"
                class="coffeeImage"
                src="${item.image}"
              />
          </picture>
          <span class="name">
            ${item.name}
            ${likeNode}
          </span>`;
      container.appendChild(node);
    });
  });
});

fetch("data/brood.json").then((response) => {
  let likeData = JSON.parse(localStorage.getItem("like"));

  response.json().then((res) => {
    let container = document.getElementsByClassName("container brood")[0];

    res.forEach((item) => {
      let node = document.createElement("div");
      node.className = "contents";
      node.id = item.id;
      // heart icon
      const likeNode = likeData.includes(item.id)
        ? `<i class="fa-solid fa-heart heartIcon isLike"
           id="isLike" onclick="clickLike(this)"></i>`
        : `<i class="fa-regular fa-heart heartIcon isUnLike"
           id="isUnLike" onclick="clickLike(this)"></i>`;

      node.innerHTML = `
          <picture class="imageWrap" onclick="goDetail(${node.id})">
              <img
                alt="coffee-cup"
                class="coffeeImage"
                src="${item.image}"
              />
          </picture>
          <span class="name">
            ${item.name}
            ${likeNode}
          </span>`;
      container.appendChild(node);
    });
  });
});

function goDetail(node) {
  window.location = `http://localhost:5500/4th/seonghoson/detail.html?id=${node.id}`;
}
