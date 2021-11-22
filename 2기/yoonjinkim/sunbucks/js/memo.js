const emailInput = document.getElementsByClassName('login-useraccount')[0];
const passwordInput = document.getElementsByClassName('login-password')[0];
const loginButton = document.getElementsByClassName('login-button')[0];

/*
const handleEmailInputChange = (event) => {
  console.log(event); //태그에게 가해진 동작을 설명해주는, 객체
  console.log(event.target); //event가 향하고 있는, 태그 자체
  console.log(event.data); //event중, Input Event에서, 입력해준 '값'을 의미하는 키값

} 

const handlePasswordInputChange = (event) => {
  console.log(event.data);
}
*/

const isEmailInputValid = (event) => {
  console.log(event.target.value.includes('@'));
  event.target.value.includes('@');

  if (isEmailInputValid && isPasswordInputValid) {
    loginButton.style.backgroundColor = 'blue';
  } else {
    loginButton.style.backgroundColor = 'black';
  }
}

const isPasswordInputValid = (event) => {
  console.log(event.target.value.length);
  event.target.value.length>=8;

  if (isEmailInputValid && isPasswordInputValid) {
    loginButton.style.backgroundColor = 'blue';
  } else {
    loginButton.style.backgroundColor = 'black';
  }
}



emailInput.addEventListener('input', isEmailInputValid);
passwordInput.addEventListener('input', isPasswordInputValid);


//핸들러함수가 기본 인자로 받는 이벤트에서, DOM요소 자체와 같은 걸 표현하면 event.target
//emailInput == /(핸들러함수내에서) event.target
//이벤트는 기본적으로 객체다. InputEvent 객체 등...


//상태에 따라서 계속 버튼 색이 변해야 함.
//if(){}else{}문만 적으면, 한 번만 실행되면 이전 색으로 안 돌아감.
//







// // <input type="button" id="target" value="login">

// const button = document.getElementsByClassName('login-button')[0];
// const userAccount = document.getElementsByClassName('login-useraccount')[0];
 

// //로그인 화면에서 아이디  패스워드(html input태그의 type은text,password)는 keydown이나 input 이벤트 써야함. 

// //addEventListener함수의 두 번째 인자 함수(=콜백함수)(=event listener 함수)는, 무조건 본인 인자(첫인자)를 event로 받도록 설계되어있다

// const handleUserAccountInputChange = (event) => {
//   console.log('useraccount input changed');
//   console.log(event.target); 
//   //addEventListener 안에 있는 함수여야, 인자로 event를받는 게 사전 설정되어 있어서, 
//   //(해당 태그에 'input'이벤트로,) 입력된 데이터까지 접근 가능한듯?!
// }

// //하단에 따로 addEventListener에서 어떤 태그를 대상으로 할지 이야기 안 해주는 한, DOM query로 접근해야 한다
// //따라서 본인의 함수에서 어떤html요소를대상으로할지로 정할 때 언급없었던 html요소는, 
// //변수 = document.getElementsByClassName('sdfasd')[0];(태그 자체 통째로 가져오기)
// //변수.value

// //event객체가 가져오는 값 자체를 가져오려면
// //event.target 하면 됨
// //따라서 (?????) 이때는 event.target.value

// button.addEventListener('click', loginButtonColorHandler); //작동 안 함. 인자로받는함수는 그냥콘솔찍는걸로만들었는뎅.... 
// //이건 DOM에서 태그별로 받을 수 있는 이벤트가 제한되어 있다는 뜻?!!!!!!!
// userAccount.addEventListener('input', loginButtonColorHandler); //작동

// //이벤트리스너의 두번째인자는 꼭 함수여야함. 그리고 event라는 매개변수 써주는 게 좋긴 함.
// //event.target.value

// //1. event.target 공부 (생활코딩)
// // event 객체가 갖고 있는 수많은 property 중, target property
// // : target은 eventListener로 호출한 event target (변수 userAccount에 담겨 있는 DOM객체, 즉 input 태그)
// function 

// //addEventListener()를 사용하면 하나의 이벤트대상에('click'? t. ?), 복수의 이벤트 타입 리스너를 등록할 수 있다

// <input type= "button" id="target" value="button" />
// const t= document.getElementById('target');

// t.addEventListener('click',function(event){alert(1);}); //꼭 인자로 받는 함수가 리턴값이 있어야하는건아닌듯. 매개변수명을 명시해줘야하나? (근데굳이?)
// t.addEventListener('click', function(event){userAccount.value==='ssssss'})


// //javascript에선 이벤트 추가하는 거 좀 귀찮음... element 일일이 가져오고, addEventListener일일이 말해줘야 함
// //react에선 이벤트 추가 간편함. <div onClick={function() {}} /> (참고,onClick이라는 기존의 이벤트가 있음)




// //   button.classList.remove('login-button');
//   //   button.classList.add('login-button-qualified');
//   //   //리턴값이 있어야 하나??? 왜 null이라서안된다그러지 
//   //   //아 매개변수 'event'등 꼭 써줘야 하나?
//   //   //DOM요소.target.value했어야 했나? target을 안썼는데.(자동완성에 value 안떴던 거 좀 쎄함)


