// url에서 id정보 얻기
const id = location.search.slice(4);
// 커피 타입얻기
const type = id.slice(0, 2);
const main = document.getElementsByClassName("main")[0];
// 삭제 버튼
const xMark = document.getElementsByClassName("fa-xmark");
// 리뷰 인풋
const input = document.getElementsByTagName("input");

// 상세정보 접근 시  커피 타입에 따라서 api를 불러온다
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
  // 리뷰 좋아요 함수
  // 로컬에 리뷰 개별 객체를 두어 노드id값과 일치한 리뷰에 좋아요를 줌
  const clickId = Number(node.parentNode.parentNode.id);
  let reviewData = JSON.parse(localStorage.getItem(id));
  const result = reviewData.map((item) => {
    return {
      ...item,
      isLike: item.id === clickId ? !item.isLike : item.isLike,
    };
  });
  localStorage.setItem(id, JSON.stringify(result));

  if (node.id === "isLike") {
    node.className = "fa-regular fa-heart heartIcon isUnLike";
    node.id = "isUnLike";
  } else {
    node.className = "fa-solid fa-heart heartIcon isLike";
    node.id = "isLike";
  }
}

function removeReview(node) {
  // 리뷰 삭제 함수
  // 로컬스토리지에 데이터를 담고 노드상에서 삭제한다
  const removeId = node.parentNode.parentNode.id;
  let reviewData = JSON.parse(localStorage.getItem(id));
  node.parentNode.parentNode.remove();

  const result = reviewData.filter((item) => {
    return item.id !== Number(removeId);
  });

  localStorage.setItem(id, JSON.stringify(result));
}

function clickLike() {
  // 좋아요 클릭 함수
  // 로컬스토리지 수정과 돔수정을 같이함
  let likeData = JSON.parse(localStorage.getItem("like"));
  let heartIcon = document.getElementsByClassName("heartIcon")[0];

  // 좋아요 아이콘 활성상태 조건문
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
  // 리뷰작성 함수
  // 로컬스토리지에 리뷰 추가와 노드추가
  const randomId = Math.floor(Math.random() * 1000000000);
  let reviewData = JSON.parse(localStorage.getItem(id));
  if (e.keyCode === 13 && e.target.value.trim() !== "") {
    let ul = document.getElementsByTagName("ul")[0];
    let newNode = document.createElement("li");
    newNode.id = randomId;
    newNode.innerHTML = `
      <span>
        <i class="fa-regular fa-heart heartIcon isUnLike" id="isUnLike" onclick="clickReviewLike(this)"></i>
        <span>unknown</span>${e.target.value}
      </span>
      <span>
        <i class="fa-solid fa-xmark" onclick="removeReview(this)"></i>
      </span>
    `;
    ul.appendChild(newNode);
    if (!!reviewData) {
      reviewData.push({ id: randomId, comment: e.target.value, isLike: false });
      localStorage.setItem(id, JSON.stringify(reviewData));
    } else {
      localStorage.setItem(
        id,
        JSON.stringify([
          { id: randomId, comment: e.target.value, isLike: false },
        ])
      );
    }
    // 인풋 초기화
    input[0].value = "";
  }
}

fetch(`data/${jsonType}.json`).then((response) => {
  // fetch data
  // api로 데이터를 요청하여 돔을 그린다
  let reviewData = JSON.parse(localStorage.getItem(id));
  let likeData = JSON.parse(localStorage.getItem("like"));

  response.json().then((res) => {
    // 커피데이터를 얻는다
    const data = res.filter((item) => {
      if (item.id === id) {
        return item;
      }
    })[0];
    // 알러지 배열 상태확인
    const allergy =
      data.nourishment.allergy.length > 0 ? data.nourishment.allergy : "없음";

    // 아이템에 좋아요 활성 유무, 로컬스토리지 데이터 받아옴
    const likeNode = likeData.includes(data.id)
      ? `<i class="fa-solid fa-heart heartIcon isLike"
           id="isLike" onclick="clickLike()"></i>`
      : `<i class="fa-regular fa-heart heartIcon isUnLike"
           id="isUnLike" onclick="clickLike()"></i>`;

    // 리뷰 로컬스토리지에서 리뷰가 있는지 확인
    let reviewNode = "";
    if (!!reviewData) {
      reviewData.forEach((item) => {
        const reviewLikeNode = item.isLike
          ? `<i class="fa-solid fa-heart heartIcon isLike" id="isLike" onclick="clickReviewLike(this)"></i>`
          : `<i class="fa-regular fa-heart heartIcon isUnLike" id="isUnLike" onclick="clickReviewLike(this)"></i>`;
        reviewNode =
          reviewNode +
          `<li id=${item.id}>
            <span>
              ${reviewLikeNode}
              <span>unknown</span>${item.comment}
              </span>
            <span>
              <i class="fa-solid fa-xmark" onclick="removeReview(this)"></i>
            </span>
          </li>`;
      });
    }
    // 상세정보 돔을 그린다
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
