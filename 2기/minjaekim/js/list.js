const coldBrewCoffeeImgAndNameData = [ // 콜드 브루 음료 커피 이름과 이미지들을 모은 객체
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

const mainInColdBrewSection = document.querySelector(".coldBrewCoffeeCollections"); // 그리드가 들어가는 첫번재 메인 섹션

for(let i = 0; i < coldBrewCoffeeImgAndNameData.length; i++){ // 반복문을 돌며 이미지와 이름을 HTML에 태그에 추가한다.
  // grid를 적용한 section 내에 들어갈 음료 이미지와 이름 태그들 생성
  const divWrapperAllImgAndName = document.createElement("div"); // 음료 이미지와 이름을 감싸줄 Div 태그
  const divWrapperCoffeeImg = document.createElement("div"); // 이미지를 감싸줄 Div 태그
  // 커피 이미지와 이름 태그
  const coffeeImg = document.createElement("img");
  const coffeeName = document.createElement("p");
  
  // 생성한 태그 각각의 클래스 부여
  divWrapperAllImgAndName.setAttribute("class","divWrapperAllImgAndName");
  divWrapperCoffeeImg.setAttribute("class","divWrapperCoffeeImg");
  coffeeImg.setAttribute("class","coffeeImg");
  coffeeName.setAttribute("class","coffeeName");
  
  // coldBrewCoffeeImgAndNameData에 있는 이미지와 이름 프로퍼티를 생성한 태그에 할당
  coffeeImg.src = coldBrewCoffeeImgAndNameData[i].img;
  coffeeImg.alt = coldBrewCoffeeImgAndNameData[i].name;
  coffeeName.innerHTML = coldBrewCoffeeImgAndNameData[i].name;
  
  // 할당을 마친 이미지 태그와 이름 태그를 section 내부에 넣기
  divWrapperCoffeeImg.appendChild(coffeeImg)
  divWrapperAllImgAndName.appendChild(divWrapperCoffeeImg);
  divWrapperAllImgAndName.appendChild(coffeeName);
  mainInColdBrewSection.appendChild(divWrapperAllImgAndName);
  
  // 생성이 잘 되었다면 마우스 오버시 확대, 마우스 아웃시 확대 취소,
  if(divWrapperAllImgAndName !== (null && undefined)){
    divWrapperAllImgAndName.onmouseover = () => {
      setTimeout(function(){
        coffeeImg.classList.add("magnifiedImg")
      },100)
    }
    divWrapperAllImgAndName.onmouseout = () => {
      setTimeout(function(){
        coffeeImg.classList.remove("magnifiedImg")
      },100)
    }
    // 이미지 클릭시 detail 페이지로 이동
    divWrapperAllImgAndName.onclick = () =>{
      return window.location.href="../detail.html"
    }
  }
}

const mainInBrewedSection = document.querySelector(".brewedCoffeeCollections");

const brewedCoffeeNameAndImgData = [
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg",
    name: "콜드 브루 플로트",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg",
    name: "프렌치 애플 타르트 나이트로",
  },
]

for(let i = 0; i<brewedCoffeeNameAndImgData.length; i++){
  const divWrapperAllImgAndName = document.createElement("div");
  const divWrapperCoffeeImg = document.createElement("div");
  const coffeeImg = document.createElement("img");
  const coffeeName = document.createElement("p");

  divWrapperAllImgAndName.setAttribute("class","divWrapperAllImgAndName");
  divWrapperCoffeeImg.setAttribute("class","divWrapperImg");
  coffeeImg.setAttribute("class","coffeeImg");
  coffeeName.setAttribute("class","coffeeName");

  coffeeImg.src = brewedCoffeeNameAndImgData[i].img;
  coffeeName.alt = brewedCoffeeNameAndImgData[i].name;
  coffeeName.innerHTML = brewedCoffeeNameAndImgData[i].name;

  divWrapperCoffeeImg.appendChild(coffeeImg)
  divWrapperAllImgAndName.appendChild(divWrapperCoffeeImg);
  divWrapperAllImgAndName.appendChild(coffeeName);
  mainInBrewedSection.appendChild(divWrapperAllImgAndName)

  if(divWrapperAllImgAndName !== (null && undefined)){
    divWrapperAllImgAndName.onmouseover = () => {
      setTimeout(function(){
        coffeeImg.classList.toggle("magnifiedImg")
      },100)
    }
    divWrapperAllImgAndName.onmouseout = () => {
      setTimeout(function(){
        coffeeImg.classList.remove("magnifiedImg")
      },100)
    }

    divWrapperAllImgAndName.onclick = () =>{
      return window.location.href="../detail.html"
    }
  }
}


