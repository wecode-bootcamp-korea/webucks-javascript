const $heart = document.querySelector('.header--like').firstElementChild;
const $id = document.querySelector('.content-box__review--id');
const $content = document.querySelector('.content-box__review--content');
let $likes = document.querySelectorAll('.content-box__review--like');
let $delete = document.querySelectorAll('.contnet-box__review--delete');

let handleHeart = function (heart){
  return function(){
  //far이 빈 하트! 만약 하트가 비어 있다면
    if(heart.classList[0]==='far'){
      heart.classList.replace('far','fas');
      heart.style.color = "#f5425d"
    //fas가 채워진 하트! 만약 하트가 채워져있다면
    }else if(heart.classList[0]==='fas'){
      heart.classList.replace('fas','far');
      heart.style.color = "#ccc"
    } 
  }
}

let handleDelete = function(del){
  return function(){
    let parent = del.parentNode.parentNode.parentNode;
    let son = del.parentNode.parentNode;
    parent.removeChild(son);
  }
}

let handleReview = function(e){

  if(e.key ==='Enter'){

    const $review = document.querySelector('.content-box__review--wrap');

    if($id.value.trim() !=='' && $content.value.trim()!==''){
      const $fragment = document.createDocumentFragment();

      const $newDiv = document.createElement('div');
      $newDiv.classList.add('content-box__review--list');

      const $newId = document.createElement('p');
      $newId.classList.add('content-box__review--username');
      $newId.textContent = $id.value.trim();

      const $newContent = document.createElement('p');
      $newContent.classList.add('content-box__review--string');
      $newContent.textContent = $content.value.trim();

      const $wrapReviewCore = document.createElement('div');
      $wrapReviewCore.classList.add('content-box__review--core');
      $wrapReviewCore.appendChild($newId);
      $wrapReviewCore.appendChild($newContent);


      const $newHeart = document.createElement('i');
      $newHeart.classList.add('far','fa-heart');
      const $like = document.createElement('div');
      $like.classList.add('content-box__review--like');
      $like.appendChild($newHeart);

      const $newDelete = document.createElement('div');
      $newDelete.classList.add('contnet-box__review--delete');
      $newDelete.textContent = '❌';

      const $newOption = document.createElement('div');
      $newOption.classList.add('content-box__review--option');
      $newOption.appendChild($like);
      $newOption.appendChild($newDelete);


      $newDiv.appendChild($wrapReviewCore);
      $newDiv.appendChild($newOption);
      $fragment.appendChild($newDiv);
      $review.appendChild($fragment);

      $id.value = "";
      $content.value = "";

      $likes = document.querySelectorAll('.content-box__review--like');
      $delete = document.querySelectorAll('.contnet-box__review--delete');

      let arr = [...$likes];
      arr[arr.length-1].firstChild.addEventListener('click',handleHeart(arr[arr.length-1].firstChild));
      arr = [...$delete];
      arr[arr.length-1].addEventListener('click',handleDelete(arr[arr.length-1]));

    }else{
      alert('빈칸이면 리뷰를 쓸 수 없습니다🥰');
    }
  }
}


$heart.addEventListener('click',handleHeart($heart));
$content.addEventListener('keypress',handleReview);
$id.addEventListener('keypress',handleReview);

[...$likes].forEach((el)=>{
  el.firstChild.addEventListener('click',handleHeart(el.firstChild));
});

[...$delete].forEach((el)=>{
  el.addEventListener('click',handleDelete(el));
});
