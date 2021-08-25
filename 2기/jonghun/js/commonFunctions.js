class CommonData {
  constructor(dataName) {
    this.dataName = dataName;
    this.initData = JSON.parse(localStorage.getItem(this.dataName));
  }

  loadData() {
    this.initData = JSON.parse(localStorage.getItem(this.dataName));
    let data;
    if (!this.initData) {
      if (this.dataName === "coffees1") data = data1;
      if (this.dataName === "coffees2") data = data2;
      this.addIsGetHeart(data);
      localStorage.setItem(this.dataName, JSON.stringify(this.initData));
    }
  }

  addIsGetHeart(data) {
    this.initData = data.map((item) => {
      item.isGetHeart = false;
      return item;
    });
  }

  saveData(data) {
    localStorage.setItem(this.dataName, JSON.stringify(data));
    this.loadData();
  }

  findMany() {
    return this.initData;
  }

  findByIndex(index) {
    return this.initData[index];
  }

  updateOne(key, value, index) {
    this.initData[index][key] = value;
    this.saveData(this.initData);
  }

  deleteByIndex(index) {
    this.saveData(this.initData.filter((item) => item.index !== index));
  }
}

class Paint {
  constructor(parentElements) {
    for (let item of parentElements) {
      this[item] = document.getElementById(item);
    }
  }

  detailPainter(data, title, img, heart1, heart2, isLike) {
    this[title].innerText = data.title;
    this[img].src = data.img;
    this.paintOnlyHeart([heart1, heart2], isLike);

    new AddHeartListener(heart1, heart2);
  }

  coffeePainter(data, parentElementId) {
    const tags = data.map(({ img, title, isGetHeart }, index) => {
      const emptyHeartId = `${parentElementId}__heart1-${index}`;
      const fullHeartId = `${parentElementId}__heart2-${index}`;
      const itemId = `${parentElementId}-${index}`;

      const tags = `<div class="coffees__coffee">
                      <div class="img__container" id=${itemId}>
                        <img src="${img}" alt="${title}" class="coffee__img"/>
                      </div>

                      <span class="coffee__name">
                        <i class="far fa-heart heart-empty
                        ${isGetHeart ? "none" : ""}" id="${emptyHeartId}"></i>

                        <i class="fas fa-heart red heart-full
                        ${isGetHeart ? "show" : ""}" id=${fullHeartId}></i>
                        ${title}
                      </span>
                    </div>`;

      return tags;
    });
    this[parentElementId].innerHTML = tags.join("");

    data.forEach((_, index) => {
      const emptyHeartId = `${parentElementId}__heart1-${index}`;
      const fullHeartId = `${parentElementId}__heart2-${index}`;
      const itemId = `${parentElementId}-${index}`;
      const item = document.getElementById(itemId);

      item.addEventListener("click", function () {
        const detailRepo = new CommonData("detail");
        const coffeeRepo = new CommonData(parentElementId);
        const detailData = coffeeRepo.findByIndex(index);
        detailData.cate = parentElementId;
        detailData.index = index;
        detailRepo.saveData([detailData]);
        window.location.href = "./detail.html";
      });
      new AddHeartListener(emptyHeartId, fullHeartId);
    });
  }

  paintOnlyHeart(children, value) {
    children.forEach((item) => {
      const element = document.getElementById(item);
      switch (value) {
        case true:
          if (item.indexOf("1-") > -1) {
            element.classList.add("none");
          } else {
            element.classList.add("show");
          }
          break;

        default:
          if (item.indexOf("1-") > -1) {
            element.classList.remove("none");
          } else {
            element.classList.remove("show");
          }
          break;
      }
    });
  }
}

class AddHeartListener {
  constructor(emptyHeartId, fullHeartId) {
    const emprtHeart = document.getElementById(emptyHeartId);
    const fullheart = document.getElementById(fullHeartId);
    emprtHeart.addEventListener("click", this.heartToggle);
    fullheart.addEventListener("click", this.heartToggle);
  }

  heartToggle() {
    const index = this.id.split("-").pop();
    const saveName = this.id.slice(0, this.id.indexOf("_"));
    const repository = new CommonData(saveName);

    const isLike = repository.findByIndex(index)["isGetHeart"];
    repository.updateOne("isGetHeart", !isLike, index);

    if (saveName === "detail") {
      const newRepo = new CommonData(repository.initData[0].cate);
      newRepo.updateOne("isGetHeart", !isLike, repository.initData[0].index);
    }

    const childrenId = [];
    for (let item of this.parentElement.children) {
      childrenId.push(item.id);
    }

    const painter = new Paint(["coffees1", "coffees2"]);
    painter.paintOnlyHeart(childrenId, !isLike);
  }
}
