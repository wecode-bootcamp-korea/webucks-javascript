let ID = document.getElementById("id");
let PW = document.getElementById("pw");
let login = document.getElementById("loginbt");

ID.addEventListener("input", function () {
    let ID = document.getElementById("id");
    let PW = document.getElementById("pw");
    let login = document.getElementById("loginbt");
  if (ID.value.includes("@") && PW.value.length >= 8) {
    login.removeAttribute("disabled");
    login.style.backgroundColor = "#60ADED";
    login.style.cursor = "pointer";
} else if( ID.value.includes("@") === false || PW.value.length<8){
    login.setAttribute("disabled", "");}// 이 부분 기존에 "" 를 넣지 않은 경우 버튼이 제대로 작동하지 않았음. 이유가 뭘까? 
    login.style.backgroundColor = "#add3eb";
    login.style.cursor = "default";
});

PW.addEventListener("input", function () {
    let ID = document.getElementById("id");
    let PW = document.getElementById("pw");
    let login = document.getElementById("loginbt");
        
    if (ID.value.includes("@") && PW.value.length>=8) {
            login.removeAttribute("disabled");
            login.style.backgroundColor = "#60ADED";
            login.style.cursor = "pointer";
        } 
    else if(ID.value.includes("@") === false || PW.value.length<8){
        login.setAttribute("disabled", "");
        login.style.backgroundColor = "#add3eb";
        login.style.cursor = "default";
    }
  });

