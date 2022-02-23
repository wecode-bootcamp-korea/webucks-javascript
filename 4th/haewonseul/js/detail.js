
let input = document.getElementsByClassName("review")[0];
let hearts = document.getElementsByClassName('fa-heart');
let deletes = document.getElementsByClassName('fa-x');

function inputReview(key){
    if(key.keyCode === 13){
        let box = document.getElementsByClassName('reviewContainer')[0];
        let reviewBox = document.createElement('div');
        let iconBox = document.createElement('div');
        iconBox.className = 'iconBox';
        reviewBox.className = 'reviewBox';

        reviewBox.appendChild(inputTxt());
        iconBox.appendChild(inputHeart());
        iconBox.appendChild(inputDelete());
        
        reviewBox.appendChild(iconBox);
        box.appendChild(reviewBox);
    }  
}
function inputTxt(){
    let write = document.createElement('p');
    write.innerHTML = input.value;
    return write;
}
function inputHeart(){
    let heart = document.createElement('i');
    heart.className = "fa-regular fa-heart";
    return heart;
}
function inputDelete(){
    let del = document.createElement('i');
    del.className = "fa-solid fa-x";
    return del;
}
function changeHeartsColor(i){
    hearts[i].className = "fa-solid fa-heart";
    hearts[i].style.color="red";
}
function deleteReview(i){
    console.log('-----------------------');
    let reviewBoxs = document.getElementsByClassName("reviewBox");
    console.log("delete " + i);
    reviewBoxs[i].remove();
}

function setAddLisnter(){
    for(let i=0; i<hearts.length; i++){
        hearts[i].addEventListener('click',function(){changeHeartsColor(i)});
    }
    for(let i=0; i<deletes.length; i++){
        console.log(deletes.length);
        deletes[i].addEventListener('click',function(){deleteReview(i)});
    }
}

input.addEventListener('keyup', inputReview);
setInterval(setAddLisnter, 1000);
