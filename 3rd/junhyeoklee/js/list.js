// 콜드브루 아이템들
const 콜드브루 = [
  {
    img: "./images/coffee5.png",
    name: "토피 넛 콜드 브루",
  },
  {
    img: "./images/coffee5.png",
    name: "나이트로 바닐라 크림",
  },
  {
    img: "./images/coffee5.png",
    name: "나이트로 콜드 브루",
  },
  {
    img: "./images/coffee5.png",
    name: "돌체 콜드 브루",
  },
  {
    img: "./images/coffee5.png",
    name: "바닐라 크림 콜드 브루",
  },
  {
    img: "./images/coffee6.png",
    name: "벨벳 다크 모카 나이트로",
  },
  {
    img: "./images/coffee7.png",
    name: "시그니처 더 블랙 콜드 브루",
  },
  {
    img: "./images/coffee8.png",
    name: "제주 비자림 콜드 브루",
  },
  {
    img: "./images/coffee9.png",
    name: "콜드 브루",
  },
  {
    img: "./images/coffee10.png",
    name: "콜드 브루 몰트",
  },
  {
    img: "./images/coffee11.png",
    name: "콜드 브루 오트 라떼",
  },
  {
    img: "./images/coffee12.png",
    name: "콜드 브루 플로트",
  },
  {
    img: "./images/coffee13.png",
    name: "프렌치 애플 타르트 나이트로",
  },
];

const 에스프레소 = [
  {
    img: "./images/coffee5.png",
    name: "아이스 토피 넛 라떼",
  },
  {
    img: "./images/coffee5.png",
    name: "토피 넛 라떼",
  },
  {
    img: "./images/coffee5.png",
    name: "에스프레소 콘 파나",
  },
  {
    img: "./images/coffee5.png",
    name: "에스프레소 마키아또",
  },
  {
    img: "./images/coffee5.png",
    name: "아이스 카페 아메리카노",
  },
  {
    img: "./images/coffee6.png",
    name: "카페 아메리카노",
  },
  {
    img: "./images/coffee7.png",
    name: "아이스 카라멜 마키아또",
  },
  {
    img: "./images/coffee8.png",
    name: "카라멜 마키아또",
  },
  {
    img: "./images/coffee9.png",
    name: "아이스 카푸치노",
  },
  {
    img: "./images/coffee10.png",
    name: "카푸치노",
  },
  {
    img: "./images/coffee11.png",
    name: "라벤더 카페 브레베",
  },
  {
    img: "./images/coffee12.png",
    name: "럼 샷 코르타도",
  },
  {
    img: "./images/coffee3.png",
    name: "바닐라 빈 라떼",
  },
  {
    img: "./images/coffee2.png",
    name: "블론드 에스프레소 라떼",
  },
  {
    img: "./images/coffee1.png",
    name: "사케라또 비안코 오버 아이스",
  },
];

//페이지 렌더링되면 보여줌
window.addEventListener("load", () => {
  showItems(콜드브루, 0, "coffee");
});
//페이지 렌더링되면 보여줌
window.addEventListener("load", () => {
  showItems(에스프레소, 1, "coffeeshot");
});

//나열함수
function showItems(item, num, what) {
  for (let i = 1; i < item.length; i++) {
    const add = document.createElement("div");
    const img = document.createElement("img");
    const h4 = document.createElement("h4");
    const like = document.createElement("span");
    const name = document.createElement("div");

    like.setAttribute("class", "like");
    add.setAttribute("class", "add");
    img.setAttribute("src", `/images/${what}${i}.png`);
    name.setAttribute("class", "name");
    h4.innerHTML = item[i].name;
    like.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;🤍`;

    like.addEventListener("click", () => {
      if (like.innerHTML === `&nbsp;&nbsp;&nbsp;&nbsp;🤍`) {
        like.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;❤️`;
      } else like.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;🤍`;
    });

    add.appendChild(img);
    add.appendChild(name);
    name.appendChild(h4);
    name.appendChild(like);

    document.getElementsByClassName("상품들")[num].appendChild(add);
  }
}
