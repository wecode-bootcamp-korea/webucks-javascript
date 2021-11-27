const heart = document.getElementById("heart3");

function hearts() {
    if (heart.style.fontWeight != "bold") {
        heart.style.fontWeight = "bold";
    }
    else {
        heart.style.fontWeight = "normal";
    }
}

heart.addEventListener("click", hearts);




let input = document.getElementsByClassName("reviewcomment")[0]; //인풋 창을 칭하는 div 태그
let items = document.getElementsByClassName("Allcomment")[0]; //전체 댓글을 포괄하는 div tag



const onAdd = () => {
    const text = input.value;

    if (input.value === '') {
        input.focus();
        return;
    }



    const comment = document.createElement("div");
    comment.setAttribute('class', 'comment');

    const spanMent = document.createElement('span');
    spanMent.setAttribute("class", 'ment');
    spanMent.innerHTML = text;

    const spanID = document.createElement('span');
    spanID.setAttribute('class', 'id');
    spanID.innerHTML = "G-DRAGON";

    const itemDel = document.createElement('button');
    itemDel.setAttribute("class", "deletebutton");
    itemDel.innerHTML = "삭제";
    itemDel.addEventListener('click', () => {
        items.removeChild(comment);
    });
    
    const itemHeart = document.createElement("a");
    itemHeart.setAttribute("href","#");
    itemHeart.setAttribute("class","commentheart");
    itemHeart.innerHTML='<i class="far fa-heart"></i>';
    itemHeart.addEventListener("click",()=> {
        if (itemHeart.innerHTML === '<i class="far fa-heart"></i>') {
            itemHeart.innerHTML = '<i class="fas fa-heart"></i>';
        }
        else {
            itemHeart.innerHTML = '<i class="far fa-heart"></i>';
        }
    });


    comment.appendChild(spanID);
    comment.appendChild(spanMent);
    comment.appendChild(itemDel);
    comment.appendChild(itemHeart);
    items.appendChild(comment);
    input.value = '';
    input.focus();
};

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
    return;
});

let commentHeart = document.getElementsByClassName("commentheart");

for (let i = 0; i < commentHeart.length; i++) {
    commentHeart[i].addEventListener("click", () => {
        if (commentHeart[i].innerHTML === '<i class="far fa-heart"></i>') {
            commentHeart[i].innerHTML = '<i class="fas fa-heart"></i>';
        }
        else {
            commentHeart[i].innerHTML = '<i class="far fa-heart"></i>';
        }
    });
}



// 원래 댓글 삭제창 구현

let deleteButton = document.getElementsByClassName("deletebutton");
let deleteComment = document.getElementsByClassName("comment");
for (let i=0; i<deleteButton.length; i++)
{
    deleteButton[i].addEventListener("click",()=>{
        items.removeChild(deleteComment[i]);
    });
}

