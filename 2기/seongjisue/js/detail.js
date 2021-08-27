
//하트 클릭시 red로 바꾸기
let heartIcon = document.querySelector(".heartIcon");

heartIcon.addEventListener('click', () => {
  heartIcon.classList.toggle("hearbuttonJs");
})


//리뷰 박스에서 엔터 클릭시 작성되고 초기화
let reveiwInputName = document.querySelector("#reveiwBox").children[0];//input박스
let reveiwInputContent = document.querySelector("#reveiwBox").children[1];//input박스
let reveiwResult = document.querySelector(".reveiwResults"); //리뷰 결과창
let reveiwNameCreate; //리뷰에서 아이디(span)
let reveiwContentCreate; //리뷰에서 내용(p)


function createNewPTag() {
  reveiwNameCreate = document.createElement("span");
  reveiwContentCreate = document.createElement("p");
  reveiwNameCreate.innerHTML = reveiwInputName.value;
  reveiwNameCreate.className = 'reveiwContent';
  reveiwContentCreate.append(reveiwNameCreate);
  reveiwContentCreate.append(" "+reveiwInputContent.value);
}

reveiwInputContent.addEventListener('keydown', (e) => {
  if(e.keyCode === 13){
    if(reveiwInputName.value && reveiwInputContent.value){
      createNewPTag();
      reveiwResult.append(reveiwContentCreate);
    }else if(!reveiwInputName.value){
      alert("닉네임을 입력해주세요");
    }else if(!reveiwInputContent.value){
      alert("내용을 입력해주세요");
    }
    reveiwInputName.value = null;
    reveiwInputContent.value = null;
  }
})




