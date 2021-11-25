// input 태그 변수 선언
let inputBox = document.getElementById("writeReview");

// 리뷰 남겨질 section 변수 선언
let reviews = document.getElementById("reviews");

inputBox.addEventListener("keyup", function(e) {
    if (e.code === "Enter") {
        let written = document.createElement('p');
        reviews.appendChild(written);
        written.innerHTML = inputBox.value;
        inputBox.value = "";
    }
}
)

let heartouter = document.getElementsByClassName("far")[0];

let heartinner = document.getElementsByClassName("fas")[0];

heartinner.addEventListener("click", function() {
    if (heartinner.style.opacity == 0) {
        heartinner.style.opacity="0.4";
        heartouter.style.color="red";
    } else if (heartinner.style.opacity == 0.4) {
        heartinner.style.opacity = "0";
        heartouter.style.color="black";
    }
    
})