const coldBrewCoffeeImgAndName = [ // 콜드 브루 음료 커피 이름과 이미지들을 모은 객체
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg",
    name: "나이트로 바닐라 크림",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg",
    name: "나이트로 콜드 브루",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg",
    name: "돌체 콜드 브루",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg",
    name: "벨벳 다크 모카 나이트로",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg",
    name: " 바닐라 크림 콜드 브루",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg",
    name: "제주 비자림 콜드 브루",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg",
    name: "콜드 브루",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg",
    name: "콜드 브루 몰트",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg",
    name: "콜드 브루 오트 라떼",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg",
    name: "콜드 브루 플로트",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg",
    name: "프렌치 애플 타르트 나이트로",
  },
];

const coldBrewSectionMain = document.querySelector(".coldBrewCoffeeCollections"); // 그리드가 들어가는 첫번재 메인 섹션

for(let i = 0; i<coldBrewCoffeeImgAndName.length; i++){ // 반복문을 돌며 이미지와 이름을 HTML에 태그로 추가한다.
  // grid에 들어갈 태그들 생성 후 클래스 부여
  const wrapperAllDiv = document.createElement("div");
  const wrapperImgDiv = document.createElement("div");
  const coffeeImg = document.createElement("img");
  const coffeeName = document.createElement("p");
  wrapperAllDiv.setAttribute("class","wrapperAllDiv");
  wrapperImgDiv.setAttribute("class","wrapperImg");
  coffeeImg.setAttribute("class","coffeeImg");
  coffeeName.setAttribute("class","coffeeName");
  // coldBrewCoffeeImgAndName에 있는 이미지와 이름 태그에 매칭시키기
  coffeeImg.src = coldBrewCoffeeImgAndName[i].img;
  coffeeImg.alt = coldBrewCoffeeImgAndName[i].name;
  coffeeName.innerHTML = coldBrewCoffeeImgAndName[i].name;
  // 이미지 태그와 이름 태그를 요소 내부에 넣기
  wrapperImgDiv.appendChild(coffeeImg)
  wrapperAllDiv.appendChild(wrapperImgDiv);
  wrapperAllDiv.appendChild(coffeeName);
  coldBrewSectionMain.appendChild(wrapperAllDiv);
  if(wrapperAllDiv){
    wrapperAllDiv.onmouseover = () => {
      setTimeout(function(){
        coffeeImg.classList.add("magnifiedImg")
      },100)
    }
    wrapperAllDiv.onmouseout = () => {
      setTimeout(function(){
        coffeeImg.classList.remove("magnifiedImg")
      },100)
    }
    wrapperAllDiv.onclick = () =>{
      return window.location.href="../detail.html"
    }
  }
}

const brewedSectionMain = document.querySelector(".brewedCoffeeCollections");

const brewedCoffeeNameAndImg = [
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg",
    name: "콜드 브루 플로트",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg",
    name: "프렌치 애플 타르트 나이트로",
  },
]

for(let i = 0; i<brewedCoffeeNameAndImg.length; i++){
  const wrapperAllDiv = document.createElement("div");
  wrapperAllDiv.setAttribute("class","wrapperAllDiv");
  const wrapperImgDiv = document.createElement("div");
  wrapperImgDiv.setAttribute("class","wrapperImg");
  const coffeeImg = document.createElement("img");
  coffeeImg.setAttribute("class","coffeeImg");
  const coffeeName = document.createElement("p");
  coffeeName.setAttribute("class","coffeeName");

  coffeeImg.src = brewedCoffeeNameAndImg[i].img;
  coffeeName.alt = brewedCoffeeNameAndImg[i].name;
  coffeeName.innerHTML = brewedCoffeeNameAndImg[i].name;

  wrapperImgDiv.appendChild(coffeeImg)
  wrapperAllDiv.appendChild(wrapperImgDiv);
  wrapperAllDiv.appendChild(coffeeName);
  brewedSectionMain.appendChild(wrapperAllDiv)
  if(wrapperAllDiv){
    wrapperAllDiv.onmouseover = () => {
      setTimeout(function(){
        coffeeImg.classList.toggle("magnifiedImg")
      },100)
    }
    wrapperAllDiv.onmouseout = () => {
      setTimeout(function(){
        coffeeImg.classList.remove("magnifiedImg")
      },100)
    }
    wrapperAllDiv.onclick = () =>{
      return window.location.href="../detail.html"
    }
  }

  
}


