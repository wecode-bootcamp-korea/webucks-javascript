// 커피 타입에 따른 리스트 컨텐츠
const contents = document.getElementsByClassName("contents");

function clickLike(node) {
  // 리스트에서 좋아요를 누를때 해당 아이템의 노드를 가져와 아이디값을 뽑아와서
  // 로컬스토리지와 노드수정을 한다
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
  // 커피 데이터 가져오기
  let likeData = JSON.parse(localStorage.getItem("like"));

  // 컨테이너 클래스이름에 두번째 인자를 타입으로 선언
  response.json().then((res) => {
    let container = document.getElementsByClassName("container coldbrew")[0];

    res.forEach((item) => {
      let node = document.createElement("div");
      node.className = "contents";
      node.id = item.id;

      // 좋아요 활성 조건
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
  // 커피 데이터 가져오기
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
  // 상세보기로 이동 url query사용
  window.location = `http://localhost:5500/4th/seonghoson/detail.html?id=${node.id}`;
}
