const coffeeImgdivList = document.querySelectorAll('.grid-coffee div');
const coffeeImgList = document.querySelectorAll('.grid-coffee img');

const len = coffeeImgList.length;
for (let idx=0; idx < len; idx++) {
    const pTag = document.createElement('p');
    pTag.textContent = coffeeImgList[idx].alt;
    coffeeImgdivList[idx].appendChild(pTag);
}