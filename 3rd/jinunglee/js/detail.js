const unlikedHeart = document.getElementById("unliked")
const likedHeart = document.getElementById("liked")

unlikedHeart.addEventListener("click", function() {
  if (unlikedHeart.style.opacity == 1) {
    unlikedHeart.style.opacity = 0
    likedHeart.style.opacity = 1
  } else if (unlikedHeart.style.opacity == 0) {
    unlikedHeart.style.opacity = 1
    likedHeart.style.opacity = 0
  }
})

const replyLog = document.getElementsByClassName("reviewLog")[0]
const replyInput = document.getElementsByClassName("reviewInput")[0]

replyInput.addEventListener('keyup', function(event) {
  if (event.key === "Enter") {
    const wrapComment = document.createElement('div') //댓글을 감쌀 div (포장지 느낌?)
    const nameComment = document.createElement('span')  //사용자 이름 
    const contentComment = document.createElement('span') //댓글 내용

    wrapComment.className = "wrapComment" //css값을 줄 수 있게끔 class 부여
    nameComment.className = "nameComment"
    contentComment.className = "contentComment"

    contentComment.innerHTML = replyInput.value // 위에서 생성한 빈 span태그 속에 replyInput값을 넣기
    
    wrapComment.appendChild(contentComment) // 우선 생성한 div태그에 input값을 넣는다
    replyLog.appendChild(wrapComment) // 내용물을 넣은 div태그를 HTML 문서에 만들어 놓은 댓글 목록에 출력
  }
})

