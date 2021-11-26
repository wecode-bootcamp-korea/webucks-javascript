// const elID = document.getElementById('ID');
// const elPassword = document.getElementById('password');
// const valID = elID.value;
// const valPassword = elPassword.value;

// function checkConditions(){

// }

// elPassword.addEventListener('keyup',function(){
//     console.log(valID);
//     console.log(valPassword);
//     if(valID.includes('@') && valPassword.length>7){
        
//         assignment('yes');
//     }
// });

// function assignment(word){
//     console.log(word);
//     if(word==='yes'){
//         document.querySelector("button").style.backgroundColor='#60ADED';
//     }
// }

const btn = document.getElementById('heart');
// function changeHeartColor(){
//     if(btn.color === 'black'){
//         btn.addEventListener('click',function(){
//     btn.style.color='red';  
//         })
//     }else{
//         btn.addEventListener('click',function(){
//             btn.style.color='black';  
//         })
//     }
// }
// changeHeartColor();
count = 0;
btn.style.color = 'black';
function countChange(){
    btn.addEventListener('click',function(){
        count++;
        if(count%2===0){
            btn.style.color = 'black'
        }
        if(count%2===1){
            btn.style.color = 'red'
        }
    })
}
countChange();
