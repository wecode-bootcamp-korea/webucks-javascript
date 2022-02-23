//id @포함되고 &&pw 8자이상 {활성화, 연한파란색에서 진한파란색으로}
//조건맞을때 로그인버튼누르면 list페이지로

let id = document.getElementsByClassName('id')[0]
let pw = document.getElementsByClassName('pw')[0]
let btn = document.getElementsByClassName('btn')[0]

function activeButton(){
if(id.value.includes('@')&& pw.value.length>7){
   btn.style.opacity= 1;
   btn.disabled=false;
 
}else{
  btn.style.opacity=0.5;
  btn.disabled= true;

}
}

id.addEventListener('keyup',activeButton)
pw.addEventListener('keyup', activeButton)