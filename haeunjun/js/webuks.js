
const login = document.querySelector("#login-btn");
const id = document.querySelector("#id");
const pw = document.querySelector("#passWord");

//검증하는 함수
const activateBtn = () => {
//id input의 값을 읽어와서 문자열 '@'가 포함되어있는가?
let isValidId = document.querySelector("#id").value.includes('@');
//passWord input의 값을 읽어와서 문자열이 '8'자 이상인가?
let isValidPW = document.querySelector("#passWord").value.length >=8
//둘 다 true면 버튼이 활성화
if(isValidId&&isValidPW){
        //버튼 비활성화 풀기
        login.disabled=false;
        //비활성화 스타일 제거
        login.classList.remove("disabledBtn");
        //활성화 스타일 추가
        login.classList.add("activatedBtn");
    }
}

//두 input에 Keyup이 될 때마다 eventListener를 걸어주기
id.addEventListener("keyup",activateBtn);
pw.addEventListener("keyup",activateBtn);

//enter event 걸어주기
pw.addEventListener("keydown",function(event){
    if(event.keyCode==13){
        login.click();
    }
});
