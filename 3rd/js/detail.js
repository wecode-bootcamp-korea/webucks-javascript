// input 태그 변수 선언
let inputBox = document.getElementById("writeReview");

// 리뷰 남겨질 section 변수 선언
let reviews = document.getElementById("reviews");

// 리뷰 process
inputBox.addEventListener("keyup", function(e) {
    if (e.code === "Enter") {
        let written = document.createElement('p');
        reviews.appendChild(written);
        written.innerHTML = inputBox.value;
        inputBox.value = "";
    }
}
)
// 테두리 하트아이콘 태그
let heartouter = document.getElementsByClassName("far")[0];
// 속이찬 하트 아이콘 태그
let heartinner = document.getElementsByClassName("fas")[0];
// 클릭시 하트아이콘 색 변화
heartinner.addEventListener("click", function() {
    if (heartinner.style.opacity == 0) {
        heartinner.style.opacity="0.4";
        heartouter.style.color="red";
    } else if (heartinner.style.opacity == 0.4) {
        heartinner.style.opacity = "0";
        heartouter.style.color="black";
    }
    
})