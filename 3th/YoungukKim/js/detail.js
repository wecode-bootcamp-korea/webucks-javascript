const heart = document.getElementById("heart3");           //오른쪽 상단의 하트 버튼 기능 구현
function hearts() {
    if (heart.style.fontWeight != "bold") {
        heart.style.fontWeight = "bold";
    }
    else {
        heart.style.fontWeight = "normal";
    }
}
heart.addEventListener("click", hearts);


let commentHeart = document.getElementsByClassName("commentheart");        //원래 있던 세개의 댓글 내에 하트 기능 추가.
for (let i = 0; i < commentHeart.length; i++) {
    commentHeart[i].addEventListener("click", () => {
        if (commentHeart[i].innerHTML === '<i class="far fa-heart"></i>') {   // 조건에 따라 하트 아이콘(각각 내부가 채워진 아이콘과 내부가 비워진 하트 아이콘) innerHTML로 지정
            commentHeart[i].innerHTML = '<i class="fas fa-heart"></i>';
        }
        else {
            commentHeart[i].innerHTML = '<i class="far fa-heart"></i>';
        }
    });
}

let deleteButton = document.getElementsByClassName("deletebutton");        // 원래 세개의 댓글 삭제창 구현
let deleteComment = document.getElementsByClassName("comment");
for (let i=0; i<deleteButton.length; i++)
{
    deleteButton[i].addEventListener("click",()=>{
        items.removeChild(deleteComment[i]);
    });
}







let input = document.getElementsByClassName("reviewcomment")[0]; //인풋 창을 칭하는 div 태그
let items = document.getElementsByClassName("Allcomment")[0]; //전체 댓글을 포괄하는 div tag

const onAdd = () => {          //엔터시에 추가되는 댓글 기능 구현  
    const text = input.value;
    if (input.value === '') {
        input.focus();
        return;
    }

    const comment = document.createElement("div"); //한 개의 댓글 (아이디와 멘트 포함)
    comment.setAttribute('class', 'comment');

    const spanMent = document.createElement('span'); // 댓글의 멘트
    spanMent.setAttribute("class", 'ment');
    spanMent.innerHTML = text;

    const spanID = document.createElement('span'); //댓글 작성자의 아이디
    spanID.setAttribute('class', 'id');
    spanID.innerHTML = "G-DRAGON";

    const itemDel = document.createElement('button'); // 삭제 버튼과 그 기능
    itemDel.setAttribute("class", "deletebutton");
    itemDel.innerHTML = "삭제";
    itemDel.addEventListener('click', () => {
        items.removeChild(comment);
    });
    
    const itemHeart = document.createElement("a"); //만들어지는 댓글의 하트 버튼과 그 기능
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
    comment.appendChild(itemHeart);  //아이디와 멘트, 삭제 버튼, 하트 버튼을 comment div 태그 내에 추가해준 후
    items.appendChild(comment);  // 그 comment를 items(전체 댓글을 감싸는 div태그 내에 추가해주어 맨 아래에 댓글이 추가되도록 해줌)
    input.value = '';  // 댓글 입력창을 비워줌
    input.focus();  // 댓글 입력창에 포커스를 넣어줌
};

input.addEventListener('keypress', (event) => { // 댓글 input 창에 enter 키가 눌러졌을 때, onAdd()기능 실현해줌
    if (event.key === 'Enter') {
        onAdd();
    }
    return;
});