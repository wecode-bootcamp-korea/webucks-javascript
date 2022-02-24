const thisIsId = document.getElementById('id');
const thisIsPw = document.getElementById('password');
const thisIsButton = document.getElementsByTagName('button');


//ID 입력시 로그인 버튼 활성화
thisIsId.addEventListener('keyup', function() {
  if(thisIsId.value.includes("@") && thisIsPw.value.length >= 8) {

    const requiredPw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const myPw = thisIsPw.value;
  
    if(requiredPw.test(myPw)) {
      document.getElementsByTagName('button')[0].className = 'active';
      document.getElementsByClassName('logInBtn')[0].href = "list.html";
    } else {
      document.getElementsByTagName('button')[0].className = 'disable';
      document.getElementsByClassName('logInBtn')[0].href = "#";
    }
  } else {
      document.getElementsByTagName('button')[0].className = 'disable';
      document.getElementsByClassName('logInBtn')[0].href = "#";
  }
})


//비밀번호 입력시 로그인 버튼 활성화
thisIsPw.addEventListener('keyup', function() {
  if(thisIsId.value.includes("@") && thisIsPw.value.length >= 8) {

    const requiredPw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const myPw = thisIsPw.value;
  
    if(requiredPw.test(myPw)) {
      document.getElementsByTagName('button')[0].className = 'active';
      document.getElementsByClassName('logInBtn')[0].href = "list.html";
    } else {
      document.getElementsByTagName('button')[0].className = 'disable';
      document.getElementsByClassName('logInBtn')[0].href = "#";
    }
  } else {
      document.getElementsByTagName('button')[0].className = 'disable';
      document.getElementsByClassName('logInBtn')[0].href = "#";
  }
})


//ID 입력시 green 아웃라인
thisIsId.addEventListener('keyup', function() {
  if(thisIsId.value.includes("@")) {
    thisIsId.className = 'green';
  } else {
    thisIsId.className = 'none';
  }
})


//비밀번호 입력시 green 아웃라인
thisIsPw.addEventListener('keyup', function() {
  if(thisIsPw.value.length >= 8) {

    const requiredPw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const myPw = thisIsPw.value;
  
    if(requiredPw.test(myPw)) {
      thisIsPw.className = 'green';
    } else {
      thisIsPw.className = 'none';
    }
  } else {
    thisIsPw.className = 'none';
  }
})


//Show, Hide 버튼 생성
const eyeBtn = document.getElementById('eyeButton');

eyeBtn.addEventListener('click', function() {
  if(thisIsPw.value.length >= 1 && eyeBtn.className == 'fa-solid fa-eye-slash fa-sm') {
    thisIsPw.type = 'text';
    eyeBtn.className = 'fa-solid fa-eye fa-sm';
  } else if (thisIsPw.value.length >= 1 && eyeBtn.className == 'fa-solid fa-eye fa-sm') {
    thisIsPw.type = 'password';
    eyeBtn.className = 'fa-solid fa-eye-slash fa-sm';
  }
})