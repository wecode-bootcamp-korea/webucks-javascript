const heartBox = document.querySelector(".heartIcon");
const nameContainer = document.querySelector(".productName")
const commentSection= document.querySelector("#commentForm");
const formInput = commentSection.querySelector("input");
const commentLists=document.querySelector(".commentLists");


const toggleHeart = (value) =>{
    const {style:{color}} = value.querySelector("i");
    if(color == "red"){
        value.innerHTML = "<i class='far fa-thin fa-heart'></i>"
    }else{
        value.innerHTML = "<i class='fa fa-solid fa-heart' style = color:red></i>"
    }
}

const productLike = () =>{
    toggleHeart(heartBox);
}

const commentLike = (heartBtn) =>{
    toggleHeart(heartBtn)
}


const makeComment = (value) =>{

    let li = document.createElement("li");
    const nickname = document.createElement("span");
    nickname.setAttribute("class","nickname");
    nickname.innerHTML = "익명";

    const comment = document.createElement("span");
    comment.setAttribute("class","comment");
    comment.innerHTML = value;

    const heartBtn = document.createElement("button");
    const inHeart = document.createElement("i");
    inHeart.setAttribute("class","far fa-thin fa-heart");
    inHeart.style.color ="black"
    heartBtn.appendChild(inHeart)
    heartBtn.addEventListener("click",()=>commentLike(heartBtn))

    const delBtn = document.createElement("button");
    delBtn.setAttribute("class","commentDel");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click",()=>{
        li.remove()
    })


    li.appendChild(nickname);
    li.appendChild(comment);
    li.appendChild(heartBtn)
    li.appendChild(delBtn);
    commentLists.append(li);
}

const leaveComment = (event) => {
    event.preventDefault();
    let {value} = formInput;
    makeComment(value);
    formInput.value=""
}

heartBox.addEventListener("click",productLike)
commentForm.addEventListener("submit",leaveComment)
