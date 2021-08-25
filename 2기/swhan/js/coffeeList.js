
const divList = document.querySelectorAll('.grid-coffee div');
const coffeeList = document.querySelectorAll('.grid-coffee img');
console.log(divList);
console.log(coffeeList);

const len = coffeeList.length;
for (let idx=0; idx < len; idx++) {
    const pTag = document.createElement('p');
    pTag.textContent = coffeeList[idx].alt;
    divList[idx].appendChild(pTag);
}