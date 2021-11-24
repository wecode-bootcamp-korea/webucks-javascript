let id = document.getElementById('login-id')
let pw = document.getElementById('login-pw')
let button = document.getElementById('login-button');

id.addEventListener('input', function(){

  if(id.value.includes('@') && pw.value.length >= 8){
    // console.log(1)
    button.disabled = false
    button.style.backgroundColor = '#0095F6'
  } else if( !(id.value.includes('@') && pw.value.length >= 8) ){
    button.disabled = true
    button.style.backgroundColor = '#AED3EA'
  }
})

pw.addEventListener('input', function(){

  if(id.value.includes('@') && pw.value.length >= 8){
    // console.log(1)
    button.disabled = false
    button.style.backgroundColor = '#0095F6'
  } else if( !(id.value.includes('@') && pw.value.length >= 8) ){
    button.disabled = true
    button.style.backgroundColor = '#AED3EA'
  }
})

button.addEventListener('click', function(){

})