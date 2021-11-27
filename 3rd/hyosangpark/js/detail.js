const inputComment = document.getElementsByClassName("review-input")[0];
const review-allBox = document.getElementsByClassName("review-list")[0]; 
const heartBox = document.getElementsByClassName("heart-icon")[0]; 

function addComment() {
    const commentList = document.createElement("li");
    commentList.className = "commentList";
    commentList.innerHTML = inputComment.value; 
    review-allBox.appendChild(commentList);
    inputComment.value = null;
}

inputComment.addEventListener("keypress", function(e){
    if(e.keyCode===13){
        console.log("wowowowowo");
        addComment();}
});
