const coldBrewCoffeeAndImg = [ // 콜드 브루 음료 커피이름과 이미지 모은 객체
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg",
    title: "나이트로 바닐라 크림",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg",
    title: "나이트로 콜드 브루",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg",
    title: "돌체 콜드 브루",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg",
    title: "벨벳 다크 모카 나이트로",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg",
    title: " 바닐라 크림 콜드 브루",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg",
    title: "제주 비자림 콜드 브루",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg",
    title: "콜드 브루",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg",
    title: "콜드 브루 몰트",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg",
    title: "콜드 브루 오트 라떼",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg",
    title: "콜드 브루 플로트",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg",
    title: "프렌치 애플 타르트 나이트로",
  },
];

const firstMainSection = document.getElementsByClassName('sectionMain')[0]; // 그리드가 들어가는 첫번재 메인 섹션

for(let i = 0; i<coldBrewCoffeeAndImg.length; i++){ // 반복문을 돌며 이미지와 이름을 HTML에 태그로 추가한다.
const imgWrapper = document.createElement('div');
imgWrapper.setAttribute('class','imgWrapper')
let divTag = document.createElement('div')
divTag.setAttribute("class","bvgImg");
divTag.style.marginBottom = `15px`
let beverageImg = document.createElement('img');
beverageImg.style.marginBottom = '15px'
beverageImg.src = coldBrewCoffeeAndImg[i].img;
let beverageName = document.createElement('span');
beverageName.innerHTML = coldBrewCoffeeAndImg[i].title;

imgWrapper.appendChild(beverageImg)
divTag.appendChild(imgWrapper);
divTag.appendChild(beverageName);
firstMainSection.appendChild(divTag);
if(divTag){
  divTag.onmouseover = () => {
    setTimeout(function(){
      beverageImg.classList.add('magnifiedImg')
    },100)
  }
  divTag.onmouseout = () => {
    setTimeout(function(){
      beverageImg.classList.remove('magnifiedImg')
    },100)
  }
  divTag.onclick = () =>{
    return window.location.href="../detail.html"
  }
}
}

const secondMainSection = document.getElementsByClassName('sectionMain')[1];

const brewedCoffeeAndImg = [
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg",
    title: "콜드 브루 플로트",
  },
  {
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg",
    title: "프렌치 애플 타르트 나이트로",
  },
]

for(let i = 0; i<brewedCoffeeAndImg.length; i++){
  const imgWrapper = document.createElement('div');
  imgWrapper.setAttribute('class','imgWrapper')
  let divTag = document.createElement('div');
  divTag.setAttribute("class","bvgImg");
  divTag.style.marginBottom = `15px`
  let beverageImg = document.createElement('img');
  beverageImg.setAttribute('class','bvgImg')
  beverageImg.style.marginBottom = '15px'
  beverageImg.src = brewedCoffeeAndImg[i].img;
  let beverageName = document.createElement('span');
  beverageName.innerHTML = brewedCoffeeAndImg[i].title;

  imgWrapper.appendChild(beverageImg)
  divTag.appendChild(imgWrapper);
  divTag.appendChild(beverageName);
  secondMainSection.appendChild(divTag)
  if(divTag){
    divTag.onmouseover = () => {
      setTimeout(function(){
        beverageImg.classList.toggle('magnifiedImg')
      },100)
    }
    divTag.onmouseout = () => {
      setTimeout(function(){
        beverageImg.classList.remove('magnifiedImg')
      },100)
    }
    divTag.onclick = () =>{
      return window.location.href="../detail.html"
    }
  }

  
}


