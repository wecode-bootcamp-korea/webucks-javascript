const thisIsId = document.getElementById('id');
const thisIsPw = document.getElementById('password');
const thisIsButton = document.getElementsByTagName('button');

thisIsId.addEventListener('keyup', function() {
  if(thisIsId.value.includes("@")) {
    if(thisIsPw.value.length >= 8) {
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

thisIsPw.addEventListener('keyup', function() {
  if(thisIsId.value.includes("@")) {
    if(thisIsPw.value.length >= 8) {
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