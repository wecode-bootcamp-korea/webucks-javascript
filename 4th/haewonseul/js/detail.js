const ENTERKEYCODE = 13;
let input = document.getElementsByClassName("review")[0];
let commentBox = document.getElementsByClassName('reviewContainer')[0];
let heart = document.getElementsByClassName("fa-regular fa-heart")[0];

function inputReview(key){
    if(key.keyCode === ENTERKEYCODE){ //enter code
        let wrapbox = document.getElementsByClassName('reviewContainer')[0];
        let reviewBox = document.createElement('div');
        let iconBox = document.createElement('div');
        iconBox.className = 'iconBox';
        reviewBox.className = 'reviewBox';

        reviewBox.appendChild(inputTxt());
        iconBox.appendChild(inputHeart());
        iconBox.appendChild(inputDelete());
        reviewBox.appendChild(iconBox);
        wrapbox.appendChild(reviewBox);
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
function changeHeartsColor(event){
    event.className = "fa-solid fa-heart";
    event.style.color="red";
}
function deleteReview(targetNode){
    targetNode.remove();
}
function setAddListener(event){
    if(event.target.className === "fa-regular fa-heart"){
        changeHeartsColor(event.target);
    }
    else if(event.target.className === "fa-solid fa-x"){
        deleteReview(event.target.parentNode.parentNode);
    }
    else{
        console.log("event error!");
    }
}
commentBox.addEventListener('click', setAddListener);
heart.addEventListener("click", function(){changeHeartsColor(heart)});
input.addEventListener('keyup', inputReview);

