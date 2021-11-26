const btn = document.getElementById('heart');

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

let inputBox = document.getElementsByTagName('input')[0];
let reviewList = document.getElementById('reviewList');


inputBox.addEventListener('click',function(){
    console.log('yes');
    let idSpace = document.createElement('span');
    inputBox.appendChild(idSpace);
    idSpace.innerHTML = 'fdsa';
});

inputBox.addEventListener('keyup',function(event){
    
    if(event.keyCode === 13){
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        reviewList.appendChild(list);
    }
})


