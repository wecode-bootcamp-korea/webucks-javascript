//coffee-gall 리스트 추가
const coldBrewList = [{
    name: '나이트로 바닐라 크림',
    imgUrl: 'img/cb-01.jpg'
}, {
    name: '나이트로 콜드 브루',
    imgUrl: 'img/cb-02.jpg'
}, {
    name: '돌체 콜드 브루',
    imgUrl: 'img/cb-03.jpg'
}, {
    name: '바닐라 크림 콜드 브루',
    imgUrl: 'img/cb-04.jpg'
}, {
    name: '벨벳 다크 모카 나이트로',
    imgUrl: 'img/cb-05.jpg'
}, {
    name: '시그니처 더 블랙 콜드 브루',
    imgUrl: 'img/cb-06.jpg'
}, {
    name: '제주 비자림 콜드 브루',
    imgUrl: 'img/cb-07.jpg'
}, {
    name: '콜드 브루',
    imgUrl: 'img/cb-08.jpg'
}, {
    name: '콜드 브루 몰트',
    imgUrl: 'img/cb-09.jpg'
}, {
    name: '콜드 브루 오트 라떼',
    imgUrl: 'img/cb-10.jpg'
}]

const brewedList = [{
    name: '아이스 커피',
    imgUrl: 'img/b-01.jpg'
}, {
    name: '오늘의 커피',
    imgUrl: 'img/b-02.jpg'
}]

//변수 선언
const coldBrewGall = document.querySelector('.cold-brew .coffee-gall'),
    brewedGall = document.querySelector('.brewed .coffee-gall');

function exportName(data) {
    let coffeeName = [];
    for (let key in data) {
        coffeeName.push(data[key]['name']);
    }
    return coffeeName;
}

function exportUrl(data) {
    let coffeeImg = [];
    for (let key in data) {
        coffeeImg.push(data[key]['imgUrl']);
    }
    return coffeeImg;
}

//함수 선언
function addCoffeeList(obj, gallery) {
    let nameIndex = exportName(obj);
    let imgIndex = exportUrl(obj);
    let tagArray = [];
    for (let i = 0; i < obj.length; i++) {
        let listTag = `<li><a class="coffee-thumbnail" href="#"><div class="coffee-img"><img src="${imgIndex[i]}"/></div><p class="coffee-name">${nameIndex[i]}</p></a></li>`
        tagArray.push(listTag);
    }
    let tagToString = tagArray.join('');
    gallery.innerHTML = tagToString;

};

addCoffeeList(coldBrewList, coldBrewGall);
addCoffeeList(brewedList, brewedGall);