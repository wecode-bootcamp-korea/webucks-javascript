// DOM요소 선택 및 변수선언 
const likeWraper = document.querySelector('#likeWraper');
const inputReview = document.querySelector('.inputReview');
const inputId = document.querySelector('.inputId');
const ul = document.querySelector('.ul');
const reviewLikeWraper = document.querySelector('.reviewLikeWraper');
let likeSwitch = false;

// 슬립함수
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  }
 
// 메인 하트 색깔 변경(변수 스위치를 활용한 구현)
function likeSwitchHandle(){
    if(!likeSwitch){
        likeWraper.innerHTML = '<i class="fas fa-heart like likeOn"></i>';
        likeSwitch = true;
    } else {
        likeWraper.innerHTML = '<i class="far fa-heart like"></i>';
        likeSwitch = false;
    }
};

// 리뷰 하트 색깔 변경(클래스 부여 여부를 활용한 구현)
function reviewLikeSwitchHandle(e){
    if(!(e.target.classList.contains('reviewLikeOn'))){
        e.target.classList.replace('far','fas');
        e.target.classList.add('reviewLikeOn');
    } else {
        e.target.classList.replace('fas','far');
        e.target.classList.remove('reviewLikeOn');
    }
};

// 리뷰 달기 기능
function appendReview(e){
    if(e.key === 'Enter'){
        sleep(10);  // 이중 입력 방지

        // 이름 10글자 제한, 미입력 경고
        if(!inputId.value.length){
            alert('이름을 입력하세요');
            return null;
         } else if(inputId.value.length > 10) {
            alert('이름을 10글자 이하로 입력하세요')
            return null;
         }
         // 로컬스토리지 지원여부 확인
         if(!(typeof Storage)){
             alert('Your web browser does not support Storage function');
             return null;
         }
                

        // 요소 생성 밑 클래스 부여
        const li = document.createElement('li');
        const userId = document.createElement('span');
        const userContent = document.createElement('span');
        const heartWraper = document.createElement('div');
        const deleteBtn = document.createElement('button');

        li.classList = 'rli';
        userId.classList = 'userId';
        userContent.classList = 'userContent';
        heartWraper.classList = 'reviewLikeWraper';
        deleteBtn.classList = 'delBtn'

        userId.innerHTML = inputId.value;
        userContent.innerHTML = " " + inputReview.value;
        heartWraper.innerHTML = '<i class="far fa-heart reviewLike"></i>';
        deleteBtn.innerHTML = '❌';
        heartWraper.addEventListener('click', reviewLikeSwitchHandle);
        deleteBtn.addEventListener('click', deleteReview);

        inputId.value = "";
        inputReview.value = "";
        

        // 결합
        li.appendChild(userId);
        li.appendChild(userContent);
        li.appendChild(heartWraper);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    }
};

//리뷰 삭제기능
function deleteReview(e){
    const delLi = e.target.parentElement;
    delLi.remove();
}


// 이벤트 리스너
likeWraper.addEventListener('click', likeSwitchHandle);
inputReview.addEventListener('keyup', appendReview);






// 로컬스토리지 연습


// if(typeof Storage !== undefined){
//     localStorage.setItem("test", "wow");
//     console.log(localStorage.getItem("todos"));
//     localStorage.removeItem("test");
//     } else {
//         alert('Your web browser does not support Storage function');
//     }