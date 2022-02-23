const id = location.search.slice(4);
const type = id.slice(0, 2);
const main = document.getElementsByClassName("main")[0];
const xMark = document.getElementsByClassName("fa-xmark");
const input = document.getElementsByTagName("input");

// detail coffee filter
let jsonType = "";
switch (type) {
  case "CB":
    jsonType = "coldbrew";
    break;
  case "BD":
    jsonType = "brood";
    break;
}

function clickReviewLike(node) {
  console.log("node >> ", node.id);
  if (node.id === "isLike") {
    node.className = "fa-regular fa-heart heartIcon isUnLike";
    node.id = "isUnLike";
  } else {
    node.className = "fa-solid fa-heart heartIcon isLike";
    node.id = "isLike";
  }
}

function removeReview(text, node) {
  node.parentNode.parentNode.remove();
  let reviewData = JSON.parse(localStorage.getItem(id));
  const result = reviewData.filter((item) => {
    return !item.includes(text);
  });
  localStorage.setItem(id, JSON.stringify(result));
}

function clickLike() {
  let likeData = JSON.parse(localStorage.getItem("like"));
  let heartIcon = document.getElementsByClassName("heartIcon")[0];

  if (heartIcon.id === "isUnLike") {
    heartIcon.className = "fa-solid fa-heart heartIcon isLike";
    heartIcon.id = "isLike";
    likeData.push(id);
    localStorage.setItem("like", JSON.stringify(likeData));
  } else {
    heartIcon.className = "fa-regular fa-heart heartIcon isUnLike";
    heartIcon.id = "isUnLike";
    const result = likeData.filter((like) => {
      if (like !== id) {
        return like;
      }
    });
    localStorage.setItem("like", JSON.stringify(result));
  }
}

function writeReview(e) {
  let reviewData = JSON.parse(localStorage.getItem(id));
  if (e.keyCode === 13 && e.target.value.trim() !== "") {
    let ul = document.getElementsByTagName("ul")[0];
    let newNode = document.createElement("li");
    newNode.innerHTML = `
      <span>
        <i class="fa-regular fa-heart heartIcon isUnLike" id="isUnLike" onclick="clickReviewLike(this)"></i>
        <span>unknown</span>${e.target.value}
      </span>
      <span>
        <i class="fa-solid fa-xmark" onclick="removeReview('${e.target.value}',this)"></i>
      </span>
    `;
    ul.appendChild(newNode);
    if (!!reviewData) {
      reviewData.push(e.target.value);
      localStorage.setItem(id, JSON.stringify(reviewData));
    } else {
      localStorage.setItem(id, JSON.stringify([e.target.value]));
    }
    input[0].value = "";
  }
}

// fetch data
fetch(`data/${jsonType}.json`).then((response) => {
  let reviewData = JSON.parse(localStorage.getItem(id));
  let likeData = JSON.parse(localStorage.getItem("like"));

  response.json().then((res) => {
    // get coffee data
    const data = res.filter((item) => {
      if (item.id === id) {
        return item;
      }
    })[0];
    // allergy list
    const allergy =
      data.nourishment.allergy.length > 0 ? data.nourishment.allergy : "없음";

    // heart icon
    const likeNode = likeData.includes(data.id)
      ? `<i class="fa-solid fa-heart heartIcon isLike"
           id="isLike" onclick="clickLike()"></i>`
      : `<i class="fa-regular fa-heart heartIcon isUnLike"
           id="isUnLike" onclick="clickLike()"></i>`;

    // get review in localstorage
    let reviewNode = "";
    if (!!reviewData) {
      reviewData.forEach((item) => {
        reviewNode =
          reviewNode +
          `<li>
            <span>
              <i class="fa-regular fa-heart heartIcon isUnLike" id="isUnLike" onclick="clickReviewLike(this)"></i>
              <span>unknown</span>${item}
              </span>
            <span>
              <i class="fa-solid fa-xmark" onclick="removeReview('${item}',this)"></i>
            </span>
          </li>`;
      });
    }
    // draw detail dom
    main.innerHTML = `
    <div class="containerHeader">
        <h1>${data.type}</h1>
        <span>홈 > MENU > 음료 > ${data.type} > ${data.name}</span>
      </div>
      <article class="container">
        <picture>
          <img
            alt="${data.name}"
            src="${data.image}"
          />
        </picture>
        <div class="contents">
          <div class="contentsTitle">
            <h2>${data.name}</h2>
            ${likeNode}
          </div>
          <div class="contentsSummary">
            <span
              >${data.summary}
            </span>
          </div>
          <div class="contentsInfomation">
            <div class="infomationHeader">
              <h3>제품 영양 정보</h3>
              <span>Tall(톨) / 355ml (12 fl oz)</span>
            </div>
            <div class="infomationDetail">
              <div class="detailBox">
                <div>
                  <span>1회 제공량 (kcal)</span>
                  <span>${data.nourishment.kal}</span>
                </div>
                <div>
                  <span>포화지방 (g)</span>
                  <span>${data.nourishment.saturatedFat}</span>
                </div>
                <div>
                  <span>단백질 (g)</span>
                  <span>${data.nourishment.protein}</span>
                </div>
              </div>
              <div class="detailBox">
                <div>
                  <span>나트륨 (mg)</span>
                  <span>${data.nourishment.sodium}</span>
                </div>
                <div>
                  <span>당류 (g)</span>
                  <span>${data.nourishment.sugar}</span>
                </div>
                <div>
                  <span>카페인 (mg)</span>
                  <span>${data.nourishment.caffeine}</span>
                </div>
              </div>
            </div>
            <div class="infomationAllergy">
              <span>알레르기 유발 요인 : ${allergy}</span>
            </div>
          </div>
          <div class="contentsReview">
            <div class="reviewHeader"><span>리뷰</span></div>
            <div class="reviewList">
              <ul>
              ${reviewNode}
              </ul>
            </div>
            <input class="reviewInput" type="text" placeholder="리뷰를 입력해주세요." onKeypress="writeReview(event)" maxlength="15" />
          </div>
        </div>
      </article>`;
  });
});
