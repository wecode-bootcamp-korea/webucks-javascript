
//하트 클릭시 red로 바꾸기
let heartIcon = document.querySelector(".heart-icon");

heartIcon.addEventListener('click', () => {
        heartIcon.style.color = 'red';
})


//리뷰 박스에서 엔터 클릭시 작성되고 초기화
let reveiwBox = document.querySelector(".reveiw-box");//input박스
let reveiwText = reveiwBox.previousElementSibling//리뷰
let reveiwCreate; //리뷰에서 아이디(span)
let reveiwIdCreate; //리뷰에서 내용(p)

reveiwBox.addEventListener('keydown', (e) =>{
    if(e.keyCode == 13){
        reveiwCreate = document.createElement("p");
        reveiwIdCreate = document.createElement("span");
        reveiwCreate.prepend(reveiwIdCreate);
        reveiwCreate.append(reveiwBox.value);
        reveiwText.append(reveiwCreate);
        reveiwBox.value = '';
    }
})