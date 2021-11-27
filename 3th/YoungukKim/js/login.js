const emailForm = document.querySelector('.userid');
const passwordForm = document.querySelector('.pw');
const loginButton = document.querySelector('button');
var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;




    emailForm.addEventListener('keyup', ()=> {
        if (emailForm.value.match(regExp) != null)
        {
          emailForm.style.border="2px solid green";
        }
        else 
        {
          emailForm.style.border="1px solid lightgray";
        }
        if(true === reg.test(passwordForm.value))
        {
          passwordForm.style.border="2px solid green";
        }
        else 
        {
          passwordForm.style.border="1px solid lightgray";
        }
        if (emailForm.style.border==="2px solid green"&&passwordForm.style.border==="2px solid green"){
          loginButton.disabled=false;
        }
        else {loginButton.disabled=true; }
    });
  
      

    passwordForm.addEventListener('keyup', ()=> {
        if (emailForm.value.match(regExp) != null)
        {
          emailForm.style.border="2px solid green";
        }
        else 
        {
          emailForm.style.border="1px solid lightgray";
        }

        if(true === reg.test(passwordForm.value))
        {
          passwordForm.style.border="2px solid green";
        }
        else 
        {
          passwordForm.style.border="1px solid lightgray";
        }
        if (emailForm.style.border==="2px solid green"&&passwordForm.style.border==="2px solid green"){
          loginButton.disabled=false;
        }
        else {loginButton.disabled=true; }
        
    });


        
let show = document.getElementsByClassName("show")[0];
let hide = document.getElementsByClassName("hide")[0];

show.disabled=false;
hide.disabled=false;

show.addEventListener("click",()=>{

  if(passwordForm.type === "password")
  {
    passwordForm.type = "text";
    return;
  }
  else {
    return;
  }
});

hide.addEventListener("click",()=>{

  if(passwordForm.type === "text")
  {
    passwordForm.type = "password";
    return;
  }
  else if(passwordForm.type === "password")
  {
    passwordForm.type = "text";
    return;
  }
});