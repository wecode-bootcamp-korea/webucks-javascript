class CommonData {
  constructor(dataName) {
    this.dataName = dataName;
    this.initData = JSON.parse(localStorage.getItem(this.dataName)) || [];
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

  checkExist(data) {
    return this.findByCondition([data]).length;
  }

  addIsGetHeart(data) {
    this.initData = data.map((item) => {
      item.isGetHeart = false;
      return item;
    });
  }

  createData(data) {
    this.initData.push(data);
    this.saveData(this.initData);
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

  findByCondition(conditions) {
    let data = this.initData;
    for (let item of conditions) {
      for (let key in item) {
        data = data.filter((jtem) => {
          console.log(item);
          console.log(jtem);
          return jtem[key] === item[key];
        });
      }
    }
    return data;
  }

  deleteByIndex(index) {
    this.saveData(this.initData.filter((_, idx) => idx !== index));
  }
}

class Paint {
  constructor(parentElements) {
    for (let item of parentElements) {
      this[item] = document.getElementById(item);
    }
  }

  paintComment(data, loginUser) {
    data ||= [];
    const tags = data.map((item, index) => {
      const { writer, desc, isGetHeart } = item;
      const emptyHeartId = `comments__heart1-${index}`;
      const fullHeartId = `comments__heart2-${index}`;
      const deleteId = `comments__delete-${index}`;
      return `
        <div class="detail__comment">
          <span class="comment__writer">${writer}</span>
          <span class="comment__desc">${desc}</span>
          <div class="hearts">
            <i class="far fa-heart heart-empty ${isGetHeart && "none"}"
            id=${emptyHeartId}></i>
            <i class="fas fa-heart red heart-full ${isGetHeart && "show"}"
            id=${fullHeartId}></i>
          </div>
          <button class="del-btn" id=${deleteId}>❌</button>
        </div>`;
    });

    this["detail__comments"].innerHTML = tags.join("");

    data.forEach((item, index) => {
      const emptyHeartId = `comments__heart1-${index}`;
      const fullHeartId = `comments__heart2-${index}`;
      const deleteId = `comments__delete-${index}`;

      const delBtn = document.getElementById(deleteId);

      if (loginUser[0]["id"] === item.writer) {
        delBtn.classList.add("active");
      } else {
        delBtn.classList.remove("active");
      }

      delBtn.addEventListener("click", function () {
        this.parentElement.remove();
        const commentRepo = new CommonData("comments");
        commentRepo.deleteByIndex(index);
      });
      new AddHeartListener(emptyHeartId, fullHeartId);
    });
  }

  detailPainter(
    data,
    title,
    img,
    heart1,
    heart2,
    isLike,
    form,
    input,
    loginUser
  ) {
    this[title].innerText = data.title;
    this[img].src = data.img;
    this.paintOnlyHeart([heart1, heart2], isLike);
    new AddHeartListener(heart1, heart2);
    const commentRepo = new CommonData("comments");

    this[form].addEventListener("submit", (e) => {
      e.preventDefault();
      commentRepo.createData({
        writer: loginUser[0]["id"] || "익명의누군가",
        desc: this[input].value,
        isGetHeart: false,
      });
      this[input].value = "";
      this.paintComment(commentRepo.initData, loginUser);
    });

    if (confirmLogin()) {
      this.paintComment(commentRepo.initData, loginUser);
      this[input].readonly = false;
    } else {
      this[input].readonly = true;
      this[input].addEventListener("click", function () {
        alert("로그인을 해야 이용할 수 있는 기능입니다.");
        window.location.href = "./login.html";
      });
    }
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
    if (!getLoginUser()) {
      alert("로그인을 하셔야 좋아요를 할 수 있습니다.");
      return (window.location.href = "./login.html");
    }

    const index = this.id.split("-").pop();
    const saveName = this.id.slice(0, this.id.indexOf("_"));
    const repository = new CommonData(saveName);
    const isLike = repository.findByIndex(index)["isGetHeart"];
    repository.updateOne("isGetHeart", !isLike, index);

    const likeRepo = new CommonData("likes");
    const newData = { user: getLoginUser()[0]["id"], index };
    if (!isLike && !likeRepo.checkExist(newData)) {
      likeRepo.createData(newData);
    } else if (isLike && likeRepo.checkExist(newData)) {
    }

    if (saveName === "detail") {
      const newRepo = new CommonData(repository.initData[0].cate);
      newRepo.createData({ user: getLoginUser()[0]["id"], commentId: this.id });
    }

    const repoNames = [];
    if (saveName !== "comments") {
      repoNames.push("coffees1");
      repoNames.push("coffees2");
    } else {
      repoNames.push("comments");
    }

    const childrenId = [];
    for (let item of this.parentElement.children) {
      childrenId.push(item.id);
    }

    const painter = new Paint(repoNames);
    painter.paintOnlyHeart(childrenId, !isLike);
  }
}

function confirmLogin() {
  return !!localStorage.getItem("users");
}

function getLoginUser() {
  return JSON.parse(localStorage.getItem("users"));
}
