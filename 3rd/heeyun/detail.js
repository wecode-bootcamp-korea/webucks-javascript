const elID = document.getElementById('ID');
const elPassword = document.getElementById('password');
const valID = elID.value;
const valPassword = elPassword.value;

function checkConditions(){

}

elPassword.addEventListener('keyup',function(){
    console.log(valID);
    console.log(valPassword);
    if(valID.includes('@') && valPassword.length>7){
        
        assignment('yes');
    }
});

function assignment(word){
    console.log(word);
    if(word==='yes'){
        document.querySelector("button").style.backgroundColor='#60ADED';
    }
}