const totalBox = document.getElementsByClassName("box");

totalBox[1].addEventListener('keydown', ()=>{
    let firstBox = totalBox[0].value.includes('@');
    let secondBox = totalBox[1].value.length > 8;
    if(firstBox && secondBox){
        totalBox[2].style.opacity = '1';
        //totalBox[2].click = () => {window.open('list.html')}
        totalBox[2].addEventListener('click', () => {
            window.open('list.html')
        })
    }
})



