// 상품 데이터 객체
const product={coldbrew:[{name:"아이스크림 블렌딩 콜드 브루",img:"1.png"},{name:"나이트로 바닐라 크림",img:"2.png"},{name:"나이트로 콜드 브루",img:"3.png"},{name:"돌체 콜드 브루",img:"4.png"},{name:"바닐라 크림 콜드 브루",img:"5.png"},{name:"벨벳 다크 모카 나이트로",img:"6.png"},{name:"제주 비자림 콜드 브루",img:"7.png"},{name:"콜드브루",img:"8.png"},{name:"콜드 브루 몰트",img:"9.png"},{name:"콜드 브루 오트 라떼",img:"10.png"},{name:"콜드 브루 플로트",img:"11.png"},{name:"프렌치 애플 타르트 나이트로",img:"12.png"}],brewed:[{name:"아이스 커피",img:"1.png"},{name:"오늘의 커피",img:"2.png"}]};

// 제품리스트 생성함수
function creatElement (proObj, cORb) {
    const coldbrewList = document.querySelector('.coldbrewList');
    const brewedList = document.querySelector('.brewedList');
    
    // list 요소 div 태그 생성 함수 
    function creatdiv(i) {
        // DOM요소 접근
        const div = document.createElement('div');
        const img = document.createElement('img');
        const span = document.createElement('span');
        const dt = document.createElement('dt');
        const PATH = "../imgs/";      // 경로 변경시 변경할 부분
        const COLDBREW = "coldbrew";
        const BREWED = "brewed";

        // img, span 속성부여 함수
        function creatBoxElements(i,CATEGORY){ 
            img.src = PATH + cORb + '/' + proObj[CATEGORY][i].img;
            img.alt = proObj.coldbrew[i].name;
            img.width = 250;
            img.height = 250;
            img.onclick = goToList; // 함수 표현식으로만 먹힘??
            span.innerHTML = proObj.coldbrew[i].name;
            span.onclick = goToList;
        }
        // 클래스 부여 함수
        function classing(){
            img.classList.add('boxElements');
            span.classList.add('caption');
            dt.classList.add('dt');
            div.classList.add('divdist')
        }
        // 결합 함수
        function compound(){
            dt.appendChild(img);
            div.appendChild(dt);
            div.appendChild(span);
        }
        // 카테고리 분류에 맞춰서 리스트 요소 생성, 결합 함수실행
        if(cORb === 'c'){
                creatBoxElements(i, COLDBREW);
                classing();
                compound();
                coldbrewList.appendChild(div);
            } else {
                creatBoxElements(i, BREWED);
                classing();
                compound();
                brewedList.appendChild(div);
        }
    }
    // 리스트 생성 반복문 
    if(cORb === 'c')
        for(let i=0; i<proObj.coldbrew.length; i++)
            creatdiv(i);
    else 
        for(let i=0; i<proObj.brewed.length; i++)
            creatdiv(i);
}

// 제품상세 페이지 이동
const goToList = function(){
    window.location.href = 'detail.html';
}

// 리스트 생성 실행
creatElement(product,'c');
creatElement(product,'b');


